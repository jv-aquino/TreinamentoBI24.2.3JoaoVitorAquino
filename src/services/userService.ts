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
      id: nextId++, // Coloca o valor do nextId e DEPOIS incrementa
      ...data,
    };

    return userRepository.create(newUser);
  },
  getAll: () => {
    const users = userRepository.getAll();
    return users.map(({ senha, ...user }) => user);
  },
  getById: (id: string) => {
    const users = userRepository.getAll().map(({ senha, ...user }) => user);
    const user = users.filter(user => user.id === Number(id));
    
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    
    return user;
  }
};
