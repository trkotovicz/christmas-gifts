import EbookController from '../controllers/Ebook';
import EbookService from '../services/Ebook';

const ebookService = new EbookService();
const ebookController = new EbookController(ebookService);

export { ebookController };