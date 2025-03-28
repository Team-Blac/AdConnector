import Joi from "joi";

// Define allowed category values
const CategoryEnum = ["Shirt", "Pants", "Shoes", "Accessories"];


export const advertValidator = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
  pictures: Joi.array().items(Joi.string().required()),
  categories: Joi.string().valid(...CategoryEnum).default('Shirt').required()
});
