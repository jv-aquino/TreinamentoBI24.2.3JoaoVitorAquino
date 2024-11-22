import { Router } from 'express';
import { userController } from '../controllers/userController';

const userRoutes = Router();

userRoutes.get('/', userController.getAll);
userRoutes.get('/:id', userController.getById);
userRoutes.patch('/:id', userController.patch);
userRoutes.delete('/:id', userController.delete);
userRoutes.post('/', userController.create);

export default userRoutes;