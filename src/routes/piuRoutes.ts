import { Router } from 'express';
import { piuController } from '../controllers/piuController';

const piuRoutes = Router();

piuRoutes.get('/', piuController.getAll);
piuRoutes.get('/:id', piuController.getById);
piuRoutes.delete('/:id', piuController.delete);
piuRoutes.post('/', piuController.create);

export default piuRoutes;