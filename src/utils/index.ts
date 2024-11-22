export const gerarMensagem = (campo: string, extras?: Record<string, string>) => ({
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
