import { Strategy, ExtractJwt } from 'passport-jwt';
import { JWT_TOKEN } from '../../../config.js';

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_TOKEN
};

const JwtStrategy = new Strategy(options, (payload, done) => {
    return done(null, payload);
});

export default JwtStrategy;