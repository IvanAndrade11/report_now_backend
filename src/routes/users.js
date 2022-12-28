import Router from 'express';
import controller from '../controllers/users.js';
import { validateCreateUser } from '../validators/users.js';
import { checkRole } from '../middlewares/auth.handler.js';

const routerUsers = Router();
routerUsers.get('/', controller.list);
routerUsers.get('/:id', controller.get);
routerUsers.post('/create', validateCreateUser, controller.create);
routerUsers.put('/:id', controller.update);
routerUsers.delete('/:id', checkRole, controller.delete);
routerUsers.post('/changePassword', controller.changePassword);

export default routerUsers;
