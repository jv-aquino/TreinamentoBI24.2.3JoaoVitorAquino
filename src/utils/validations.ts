import Joi from 'joi';

const gerarMensagem = (campo: string, extras?: Record<string, string>) => ({
  'string.base': `O campo '${campo}' deve ser um texto`,
  'string.empty': `O campo '${campo}' não pode estar vazio`,
  'string.email': `O campo '${campo}' deve ser um email válido`,
  'string.pattern.base': `O campo '${campo}' está em um formato inválido`,
  'string.min': `O campo '${campo}' deve ter pelo menos {#limit} caracteres`,
  'string.max': `O campo '${campo}' deve ter no máximo {#limit} caracteres`,
  'number.base': `O campo '${campo}' deve ser um número`,
  'number.min': `O campo '${campo}' deve ser maior ou igual a {#limit}`,
  'number.max': `O campo '${campo}' deve ser menor ou igual a {#limit}`,
  'date.base': `O campo '${campo}' deve ser uma data válida`,
  'any.required': `O campo '${campo}' é obrigatório`,
  ...(extras || {}),
});

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
