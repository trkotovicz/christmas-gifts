import { Router } from 'express';
import { personController } from './main';

const personRouter = Router();

personRouter.post('/wishes', personController.newWish);
personRouter.get('/wishes', personController.listAllWishes);
personRouter.get('/wishes/title', personController.findWishesByBookTitle);
personRouter.get('/wishes/person', personController.findWishesByPerson);

export default personRouter;