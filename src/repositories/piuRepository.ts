import { Piu } from '../models/piu';

const pius: Piu[] = [];

export const piuRepository = {
  getAll: () => pius,

  getById: (id: number) => {
    const index = pius.findIndex(piu => piu.id === id);
    if (index === -1) {
      return false;
    }
    return pius[index]; 
  },

  create: (piu: Piu) => {
    pius.push(piu);
    return piu;
  },
  
  delete: (id: number) => {
    const piu = piuRepository.getById(id);
    if (!piu) {
      return false;
    }
    return pius.splice(piu.id, 1);
  }
};
