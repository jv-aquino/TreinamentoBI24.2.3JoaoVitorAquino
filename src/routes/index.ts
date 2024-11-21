import { Router } from 'express';
import { userController } from '../controllers/userController';

const userRoutes = Router();

userRoutes.post('/users', userController.create);

export default userRoutes;