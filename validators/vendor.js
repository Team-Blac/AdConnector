import Joi from "joi";

export const vendorValidator = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
  pictures: Joi.string().required(),
  quantity: Joi.number().required(),

});
