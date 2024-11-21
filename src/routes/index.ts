import { Router } from 'express';
import { userController } from '../controllers/userController';

const routes = Router();

routes.get('/users', userController.getAll);
routes.get('/users/:id', userController.getById);
routes.delete('/users/:id', userController.delete);
routes.post('/users', userController.create);

export default routes;