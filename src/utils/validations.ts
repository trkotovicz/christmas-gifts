import Joi from 'joi';
import { Category } from '../interfaces/Category';
import { Language } from '../interfaces/Language';

export const ebookSchema = (data: object): Joi.ValidationResult => {
  const languageValues = Object.values(Language);
  const categoryValues = Object.values(Category);

  const schema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    author: Joi.string().min(3).max(50).required(),
    year: Joi.string()
      .pattern(/^\d{4}$/)
      .messages({ 'string.pattern.base': 'The year must be in the format "YYYY"' }),
    pages: Joi.number().integer().positive(),
    language: Joi.string()
      .valid(...languageValues)
      .required(),
    category: Joi.string()
      .valid(...categoryValues)
      .required(),
  });

  const { error, value } = schema.validate(data);
  if (error) throw new Error(error.message);
  return value;
};
