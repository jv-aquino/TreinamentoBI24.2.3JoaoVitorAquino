import { Request, Response } from 'express';
import { userService } from '../services/userService';
import { userValidation } from '../utils/userValidation';

export const userController = {
  create: (req: Request, res: Response) => {
    const { error } = userValidation.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    try {
      const newUser = userService.createUser(req.body);
      return res.status(200).json(newUser);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },
  getAll: (req: Request, res: Response) => { 
    try {
      const users = userService.getAll();
      return res.status(200).json(users);
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
      const user = userService.getById(id);
      return res.status(200).json(user);
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
      const user = userService.delete(id);
      return res.status(200).json(user);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  },
  patch: (req: Request, res: Response) => { 
    const { id } = req.params;
    const data = req.body;

    if (!id) {
      return res.status(400).json({ error: "O campo 'id' é necessário" });
    }
    if (!data) {
      return res.status(400).json({ error: "Os dados são necessários" });
    }

    try {
      const user = userService.patch(id, data);
      return res.status(200).json(user);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }
};
