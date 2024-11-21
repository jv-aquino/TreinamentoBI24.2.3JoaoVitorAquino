import { Request, Response } from 'express';
import { userService } from '../services/userService';
import { userValidation } from '../utils/validations';

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
      return res.status(400).json({ error: err.message });
    }
  },
};
