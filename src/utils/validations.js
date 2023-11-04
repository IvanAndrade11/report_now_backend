import { comparePassword } from '../services/crypto.js';
import User from '../models/User.js';
import mongoose from 'mongoose';

export function validateProps(data) {
    for (var prop in data) {
        if (Object.prototype.hasOwnProperty.call(data, prop)) {
            if (data[prop] === '' || data[prop] === ' ') {
                return {
                    res: false,
                    error: `La propiedad ${prop} no puede estar vacia.`,
                };
            }
            if (typeof data[prop] === 'undefined') {
                return {
                    res: false,
                    error: `Falta la propiedad ${prop}.`,
                };
            }
        }
    }
    return { res: true };
}

export function existObject(id, model) {
    return mongoose.Types.ObjectId.isValid(id)
        ? async () => {
            const data = await model.findById(id);
            return data ? true : false;
        }
        : false;
}

export async function validatePassword(email, password) {
    const user = await User.findOne({ email: email }).exec();
    return await comparePassword(password, user.password);
}