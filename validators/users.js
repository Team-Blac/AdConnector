import Joi from "joi";

export const registerVendorValidator = Joi.object({
  userName: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.ref("password"),
}).with("password", "confirmPassword");

export const loginVendorValidator = Joi.object({
  userName: Joi.string().optional(),
  email: Joi.string().optional(),
  password: Joi.string().required(),
});
