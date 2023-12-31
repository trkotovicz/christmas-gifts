import { Router } from 'express';
import { personController } from './main';

const personRouter = Router();

personRouter.post('/wishes', personController.newWish);
personRouter.get('/wishes', personController.listAllWishes);
personRouter.get('/wishes/:id', personController.findByWishId);
personRouter.get('/wishes/title', personController.findWishesByBookTitle);
personRouter.get('/wishes/person/name', personController.findWishesByPersonName);
personRouter.get('/wishes/person/email', personController.findWishesByPersonEmail);
personRouter.get('/wishes-ebooks', personController.listAllPersonEbook);
personRouter.get('/wishes-ebooks/email', personController.listPersonEbookByEmail);

export default personRouter;