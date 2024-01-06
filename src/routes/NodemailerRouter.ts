import { Router } from 'express';
import { nodemailerController } from './main';
import { sendEmailMiddleware } from '../middlewares/authMiddleware';

const nodemailerRouter = Router();

nodemailerRouter.post('/mail/ebooks', sendEmailMiddleware, nodemailerController.sendMail);
nodemailerRouter.post('/send-all-ebooks', sendEmailMiddleware, nodemailerController.sendAllEbooks);

export default nodemailerRouter;