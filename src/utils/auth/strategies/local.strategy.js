import Strategy from 'passport-local';
import AuthService from '../../../services/auth.js';

const LocalStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password'
    }, 
    async (email, password, done) => {
        try {
            const service = new AuthService();
            const user = await service.getUser(email, password)
            done(null, user);
        } catch (error) {
            done(error, false);
        }
    }
);

export default LocalStrategy;