import { Request, Response } from 'express';
import { piuService } from '../services/piuService';
import { piuValidation } from '../utils/piuValidation';

export const piuController = {
  create: (req: Request, res: Response) => {
    const { error } = piuValidation.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    try {
      const newPiu = piuService.createPiu(req.body);
      return res.status(200).json(newPiu);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },
  getAll: (req: Request, res: Response) => { 
    try {
      const pius = piuService.getAll();
      return res.status(200).json(pius);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },
  getById: (req: Request, res: Response) => { 
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "O campo 'id' é necessário" });
    }

    try {
      const piu = piuService.getById(id);
      return res.status(200).json(piu);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },
  delete: (req: Request, res: Response) => { 
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "O campo 'id' é necessário" });
    }

    try {
      const piu = piuService.delete(id);
      return res.status(200).json(piu);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },
};
