import User from '../models/User.js';
import { encrypt } from '../services/crypto.js';
import {
    existObject,
    validateProps,
    validatePassword,
} from '../utils/validations.js';

const controller = {
    list: async (req, res) => {
        const rows = await User.find();
        res.status(200).json(rows);
    },
    get: async (req, res) => {
        const id = req.params.id;
        const exist = existObject(id, User);

        if (!exist) {
            res.status(500).json({
                error: `El usuario con id ${id} no existe.`,
            });
        }else{
            const user = await User.findById(id);
            res.status(200).json(user);
        }
    },
    create: async (req, res) => {
        const { email, password } = req.body;
        const isValid = validateProps(req.body);

        if (isValid.res) {
            const newPass = await encrypt(password, email);
            req.body.password = newPass;
            req.body.admin = false;
            const newUser = new User(req.body);
            const insert = await newUser.save();

            res.status(200).json(insert);
        } else {
            res.status(500).json({
                error: isValid.error,
            });
        }
    },
    update: async (req, res) => {
        const id = req.params.id;
        const isValid = validateProps(req.body);
        // Validamos que los datos vengan completos
        if (!isValid.res) {
            res.status(500).json({
                error: isValid.error,
            });
            return;
        }
        // Validamos que el usuario exista
        const exist = existObject(id, User);
        if (!exist) {
            res.status(500).json({
                error: 'El usuario no existe.',
            });
            return;
        }
        // Actualizamos
        const update = await User.findByIdAndUpdate(id, req.body);
        res.status(200).json(update);
    },
    delete: async (req, res) => {
        const id = req.params.id;
        const exist = existObject(id, User);
        if (!exist) {
            res.status(500).json({
                error: `El usuario con id ${id} no existe.`,
            });
        }
        const response = await User.findByIdAndDelete(id);
        res.status(200).json(response);
    },
};


export default controller;
