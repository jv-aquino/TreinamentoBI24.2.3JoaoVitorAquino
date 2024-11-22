import Joi from "joi";
import { gerarMensagem } from "./index";

export const piuValidation = Joi.object({
  userId: Joi.string().required().label("userId").messages(gerarMensagem('userId')),
  texto: Joi.string().required().min(1).label("Texto").messages(gerarMensagem('Texto')),
  rts: Joi.string().label("Rts").messages(gerarMensagem('Rts')),
  comentarios: Joi.string().label("Comentarios").messages(gerarMensagem('Comentarios')),
  likes: Joi.string().label("Likes").messages(gerarMensagem('Likes')),
})