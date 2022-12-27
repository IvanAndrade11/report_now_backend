import jsonwebtoken from 'jsonwebtoken';
import { JWT_TOKEN } from '../config.js';

const controller = {
    login: async (req, res, next) => {
        try {
            const { user } = req;
            const token = jsonwebtoken.sign(
                { 
                    sub: user._id, 
                    admin: user.admin 
                }, 
                JWT_TOKEN, 
                { expiresIn: '1h' }
            );
            res.status(200).json({
                user,
                token
            });
        } catch (error) {
            next(error);
        }
    },
};

export default controller;
