import { User } from '../models/user';

const users: User[] = [];

export const userRepository = {
  getAll: () => users,

  getById: (id: number) => {
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
      return false;
    }
    return users[index]; 
  },

  findByEmail: (email: string) => users.find(user => user.email === email),

  findByCPF: (cpf: string) => users.find(user => user.cpf === cpf),

  findByTelefone: (telefone: string) => users.find(user => user.telefone === telefone),

  create: (user: User) => {
    users.push(user);
    return user;
  },
  delete: (id: number) => {
    const user = userRepository.getById(id);
    if (!user) {
      return false;
    }
    return users.splice(user.id, 1);
  }
};
