import EbookController from '../controllers/Ebook';
import PersonController from '../controllers/Person';
import EbookService from '../services/Ebook';
import PersonService from '../services/Person';

const ebookService = new EbookService();
const ebookController = new EbookController(ebookService);

const personService = new PersonService();
const personController = new PersonController(personService);

export { ebookController, personController };