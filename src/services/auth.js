import User from "../models/User.js";
import { unauthorized } from '@hapi/boom';
import { validatePassword } from "../utils/validations.js";
import jsonwebtoken from 'jsonwebtoken';
import { JWT_TOKEN, ENDPOINT } from "../config.js";
import sendMailing from "./mailer.js";
import { encrypt } from "./crypto.js";

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
            const link = `${ENDPOINT}/mailer/changePassword`
            const subject = 'Report Now: Restablecimiento de Contraseña'
            const html = this.getRecoveryHTML(link, token)
            const response = await sendMailing(email, subject, html)
            return response
        }
    }

    getRecoveryHTML(link, token) {
        return `
        <h1>Recover Password</h1>
        <form action="${link}" method="post">
            <div style="display: none;">
                <label for="token">Token:</label>
                <input type="text" id="token" name="token" value="${token}"/>
            </div>
            <div>
                <label for="newPassword">New Password:</label>
                <input type="password" id="newPassword" name="newPassword" />
            </div>
            <div>
                <label for="passwordConfirm">Repeat Password</label>
                <input type="password" id="passwordConfirm" name="passwordConfirm" />
            </div><br />
            <input type="submit" value="Submit" />
        </form>
      `
    }

    async changePassword(token, newPassword, passwordConfirm){
        try {
            if(newPassword !== passwordConfirm){
                throw `Password Error - ${unauthorized().output.payload.error}`
            }
            const payload = jsonwebtoken.verify(token, JWT_TOKEN)
            const user = await User.findById(payload.sub)
            if (!user) {
                throw `Authentication Error - ${unauthorized().output.payload.error}`
            }
            const finalPassword = await encrypt(newPassword, user.email)
            const update = await User.findByIdAndUpdate(payload.sub, { password: finalPassword })
            return `
                <h2>Se ha cambiado la contraseña del usuario ${update.name} correctamente</h2>
                <br /><a href="${ENDPOINT}">Iniciar Sesión</a>
            `
        } catch (error) {
            throw `Change Password Error - ${unauthorized().output.payload.error}`
        }

    }
}