import "dotenv/config";
import nodemailer, { TransportOptions } from "nodemailer";
import { emailFormatter } from './emailFormatter';

export default class NodemailerService {
  sendMail = async (email: string, name: string, title: string, author: string, year: string, pages: string, language: string) => {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    } as TransportOptions);
  
    const formattedEmail = emailFormatter(name, title, author, year, pages, language);

    const mailer = {
      from: formattedEmail.from,
      to: email,
      subject: formattedEmail.subject,
      text: formattedEmail.body,
    };
  
    return new Promise((resolve, reject) => {
      transporter
        .sendMail(mailer)
        .then((response) => {
          transporter.close();
          return resolve(response);
        })
        .catch((error) => {
          transporter.close();
          return reject(error);
        });
    });
  };
}