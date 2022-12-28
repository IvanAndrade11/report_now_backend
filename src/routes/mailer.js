import Router from 'express';
import controller from '../controllers/mailer.js';

const routerMailer = Router();
routerMailer.post('/sendMail', controller.sendMail);

export default routerMailer;