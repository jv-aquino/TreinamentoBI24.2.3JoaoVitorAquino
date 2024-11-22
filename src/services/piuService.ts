import { piuRepository } from '../repositories/piuRepository';
import { DefaultPiu, Piu } from '../models/piu';
import { userRepository } from '../repositories/userRepository';

let nextId = 0;

export const piuService = {
  createPiu: (data: DefaultPiu) => {
    if (!userRepository.getById(Number(data.userId))) {
      throw new Error('User inexistente');
    }

    const dataHoje = new Date();

    const newPiu: Piu = {
      id: nextId++, // Coloca o valor do nextId e DEPOIS incrementa,
      createdAt: dataHoje,
      updatedAt: dataHoje, 
      ...data,
      userId: Number(data.userId),
      rts: data?.rts ?? 0,
      comentarios: data?.comentarios ?? 0,
      likes: data?.likes ?? 0,
    };

    return piuRepository.create(newPiu);
  },
  getAll: () => {
    return piuRepository.getAll();
  },
  getById: (id: string) => {
    const piu = piuRepository.getById(Number(id));
    
    if (!piu) {
      throw new Error('Piu não encontrado');
    }

    return piu;
  },
  delete: (id: string) => {
    const piu = piuService.getById(id);

    if (!piuRepository.delete(Number(id))) {
      throw new Error('Erro do servidor');
    }

    return piu;
  },
};
