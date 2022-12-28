import User from "../models/User.js";
import { unauthorized } from '@hapi/boom';
import { validatePassword } from "../utils/validations.js";
import jsonwebtoken from 'jsonwebtoken';
import { JWT_TOKEN } from "../config.js";
import sendMailing from "./mailer.js";

export default class AuthService {

    async getUser(email, password){
        const user = await User.findOne({ email: email }).exec();
        if(!user){
            throw `User not found - ${unauthorized().output.payload.error}`
        }
        const valid = await validatePassword(email, password);
        if(!valid){
            throw `Invalid Password - ${unauthorized().output.payload.error}`
        }
        return user
    }

    signToken(user, time){
        const payload = { 
            sub: user._id, 
            admin: user.admin 
        }
        const timeToken = { 
            expiresIn: time
        }
        return jsonwebtoken.sign(payload, JWT_TOKEN, timeToken)
    }

    async sendRecovery(email){
        const user = await User.findOne({ email: email }).exec();
        if (!user) {
            throw `Email Error - ${unauthorized().output.payload.error}`
        }else{
            const token = this.signToken(user, '15min')
            const link = `https://report-now.herokuapp.com/restore-password?token=${token}`
            const response = await sendMailing(
                email,
                'Report Now: Restablecimiento de Contraseña',
                `Para restablecer la contraseña debe ingresar al siguiente <a href="${link}">Link</a>`
            )
            return response
        }
    }
}