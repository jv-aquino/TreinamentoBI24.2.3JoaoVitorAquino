import { userRepository } from '../repositories/userRepository';
import { User } from '../models/user';

let nextId = 0;

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
    const user = userRepository.getById(Number(id));
    
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return user;
  },
  delete: (id: string) => {
    const user = userService.getById(id);

    if (!userRepository.delete(Number(id))) {
      throw new Error('Erro do servidor');
    }

    return user;
  },
  patch: (id: string, data: Partial<Omit<User, 'id'>>) => {
    const user = userService.getById(id);

    const updatedUser: User = { ...user, ...data };

    userRepository.delete(user.id);
    userRepository.create(updatedUser);

    const { senha, ...safeUser } = updatedUser; 
    return safeUser;
  }
};
