import Strategy from 'passport-local';
import User from '../../../models/User.js';
import { unauthorized } from '@hapi/boom';
import { validatePassword } from '../../validations.js';

const LocalStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
},
async (email, password, done)=>{
    try {
        const user = await User.findOne({ email: email }).exec();
        if(!user){
            done(`User not found - ${unauthorized().output.payload.error}`, false);
            return;
        }
        const valid = await validatePassword(email, password);
        if(!valid){
            done(`Invalid Password - ${unauthorized().output.payload.error}`, false);
            return;
        }
        done(null, user);
    } catch (error) {
        done(error, false);
    }
});

export default LocalStrategy;