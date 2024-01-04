import { Router } from 'express';
import { nodemailerController } from './main';

const nodemailerRouter = Router();

nodemailerRouter.post('/mail/ebooks', nodemailerController.sendMail);
nodemailerRouter.post('/send-all-ebooks', nodemailerController.sendAllEbooks);

export default nodemailerRouter;