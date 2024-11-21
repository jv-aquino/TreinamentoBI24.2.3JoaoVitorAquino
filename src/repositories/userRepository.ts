import { User } from '../models/user';

const users: User[] = [];

export const userRepository = {
  getAll: () => users,

  findByEmail: (email: string) => users.find(user => user.email === email),

  findByCPF: (cpf: string) => users.find(user => user.cpf === cpf),

  findByTelefone: (telefone: string) => users.find(user => user.telefone === telefone),

  create: (user: User) => {
    users.push(user);
    return user;
  },
};
