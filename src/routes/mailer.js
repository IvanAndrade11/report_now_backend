import Router from 'express';
import controller from '../controllers/mailer.js';

const routerMailer = Router();
routerMailer.post('/sendMail', controller.sendMail);
routerMailer.post('/recovery', controller.recovery);
routerMailer.post('/changePassword', controller.changePassword);

export default routerMailer;
