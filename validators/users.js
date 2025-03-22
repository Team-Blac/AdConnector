import Joi from "joi";

const roles = [
  "superadmin",
  "admin",
  "vendor",
  "customer"
];


export const registerVendorValidator = Joi.object({
  userName: Joi.string().required(),
  email: Joi.string().required(),
  role: Joi.string().valid(...roles).default('customer'),
  password: Joi.string().required(),
  confirmPassword: Joi.ref("password"),
}).with("password", "confirmPassword");

export const loginVendorValidator = Joi.object({
  userName: Joi.string().optional(),
  email: Joi.string().optional(),
  password: Joi.string().required(),
});
