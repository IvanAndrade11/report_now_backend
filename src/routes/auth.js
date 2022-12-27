import Router from 'express';
import controller from '../controllers/auth.js';

const routerAuth = Router();
routerAuth.post('/login', controller.login);

export default routerAuth;
