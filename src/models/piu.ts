export interface Piu {
  id: number;
  userId: number;
  texto: string;
  rts: number;
  comentarios: number;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface DefaultPiu {
  userId: number | string;
  texto: string;
  rts: number | undefined;
  comentarios: number | undefined;
  likes: number | undefined;
}