import Joi from 'joi';
import { gerarMensagem } from "./index";

export const userValidation = Joi.object({
  nome: Joi.string()
    .min(3)
    .required()
    .label('Nome')
    .messages(gerarMensagem('Nome')),

  email: Joi.string()
    .email()
    .required()
    .label('Email')
    .messages(gerarMensagem('Email')),

  senha: Joi.string()
    .min(6)
    .required()
    .label('Senha')
    .messages(gerarMensagem('Senha')),

  telefone: Joi.string()
    .pattern(/^\d{10,11}$/)
    .required()
    .label('Telefone')
    .messages(
      gerarMensagem('Telefone', {
        'string.pattern.base': 'O campo Telefone deve conter 10 ou 11 dígitos numéricos',
      })
    ),

  cpf: Joi.string()
    .pattern(/^\d{11}$/)
    .required()
    .label('CPF')
    .messages(
      gerarMensagem('CPF', {
        'string.pattern.base': 'O campo CPF deve conter exatamente 11 dígitos numéricos',
      })
    ),

  dataNascimento: Joi.date()
    .iso()
    .required()
    .label('Data de Nascimento')
    .messages(gerarMensagem('Data de Nascimento')),
});