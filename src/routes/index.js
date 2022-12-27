import express from 'express';
import passport from 'passport';
import { checkApiKey } from '../middlewares/auth.handler.js';
import routerAuth from './auth.js';
import routerUsers from './users.js';
import routerNews from './news.js';

const routerApi = (app) => {
    const router = express.Router();
    app.use('/api', router);

    router.use(
        '/auth',
        passport.authenticate('local', { session: false }),
        routerAuth
    );

    router.use(
        '/users',
        passport.authenticate('jwt', { session: false }),
        checkApiKey,
        routerUsers
    );

    router.use(
        '/news',
        passport.authenticate('jwt', { session: false }),
        checkApiKey,
        routerNews
    );
};

export default routerApi;