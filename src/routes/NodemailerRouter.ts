import { Router } from 'express';
import { nodemailerController } from './main';

const mailRouter = Router();

mailRouter.post('/mail/ebook', nodemailerController.sendMail);

export default mailRouter;