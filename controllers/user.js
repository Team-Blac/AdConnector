import { UserModel } from "../models/user.js";
import {
  loginVendorValidator,
  registerVendorValidator,
} from "../validators/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
  // Validate user information
  const { error, value } = registerVendorValidator.validate(req.body);
  if (error) {
    return res.status(422).json(error);
  }
  // Check if user does not exist already
  const user = await UserModel.findOne({
    $or: [{ username: value.username }, { email: value.email }],
  });

  if (user) {
    return res.status(409).json("Vendor already exists.");
  }
  // Hash plaintext password
  const hashedPassword = bcrypt.hashSync(value.password, 10);
  // Create user record in database
  await UserModel.create({
    ...value,
    password: hashedPassword,
  });
  // Send registration email to user
  // (Optionally) Generate access token for user
  // Return Response
  return res.status(201).json("Vendor registered successfully!");
};

export const loginUser = async (req, res, next) => {
  // Validate user information
  const { error, value } = loginVendorValidator.validate(req.body);
  if (error) {
    return res.status(422).json(error);
  }
  // Find matching user record in database
  const user = await UserModel.findOne({
    $or: [{ username: value.username }, { email: value.email }],
  });

  if (!user) {
    return res.status(404).json("Vendor does not exist!");
  }
  // Compare incoming password with saved password
  const correctPassword = bcrypt.compareSync(value.password, user.password);
  if (!correctPassword) {
    return res.status(401).json("Invalid credentials!");
  }
  // Generate access token for user
  const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "24h",
  });
  // Return Response
  return res.status(200).json({ accessToken });
};
