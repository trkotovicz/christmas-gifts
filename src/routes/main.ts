import EbookController from '../controllers/Ebook';
import PersonController from '../controllers/Person';
import NodemailerController from '../controllers/nodemailer/nodemailerController';
import EbookService from '../services/Ebook';
import PersonService from '../services/Person';
import NodemailerService from '../services/nodemailer/nodemailerService';

const ebookService = new EbookService();
const ebookController = new EbookController(ebookService);

const personService = new PersonService();
const personController = new PersonController(personService);

const nodemailerService = new NodemailerService();
const nodemailerController = new NodemailerController(nodemailerService);

export { ebookController, personController, nodemailerController };