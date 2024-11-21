import { userRepository } from '../repositories/userRepository';
import { User } from '../models/user';

let nextId = 1;

export const userService = {
  createUser: (data: Omit<User, 'id'>) => {
    const { email, telefone, cpf } = data;

    if (userRepository.findByEmail(email)) {
      throw new Error('Email já cadastrado');
    }

    if (userRepository.findByTelefone(telefone)) {
      throw new Error('Telefone já cadastrado');
    }

    if (userRepository.findByCPF(cpf)) {
      throw new Error('CPF já cadastrado');
    }

    const newUser: User = {
      id: nextId++,
      ...data,
    };

    return userRepository.create(newUser);
  },
};
