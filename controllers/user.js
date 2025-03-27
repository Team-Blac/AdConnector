import { UserModel } from "../models/user.js";
import {
  loginUserValidator,
  registerUserValidator,
  updateUserValidator
} from "../validators/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/mailing.js";

export const registerUser = async (req, res, next) => {
  // Validate user information
  console.log("Before Joi Validation:", req.body);
  const { error, value } = registerUserValidator.validate(req.body);
  if (error) {
    return res.status(422).json(error);
  }
  // Check if user does not exist already
  const user = await UserModel.findOne({
    email: value.email
  });

  if (user) {
    return res
      .status(409)
      .json("Email already in use. Please log in or use a different email.");
  }
  // Hash plaintext password
  const hashedPassword = bcrypt.hashSync(value.password, 10);

  console.log("After Joi Validation:", value);
  // Create user record in database
  const newUser = await UserModel.create({
    ...value,
    password: hashedPassword
  });

  
  // Send registration email to user
    await sendEmail(newUser.email, "Welcome To Adconnect", `<h1>Welcome to My Gift</h1>
    <p>Hello <strong>${newUser.userName}</strong>,</p>
    <p>We are excited to have you on board! 🎉</p>
    <p>Start posting your ads and we will help you grow your bussiness:</p>
    <a href="https://adconnector.com" 
       style="display:inline-block; padding:10px 20px; background-color:#007BFF; color:white; text-decoration:none; border-radius:5px;">
       Start advertizing!
    </a>
    <p>Happy Shopping! </p>
    <hr>
    <small>If you did not sign up for this, please ignore this email.</small>`);

  // (Optionally) Generate access token for user
  // Return Response
  return res.status(201).json("Registration successful! Welcome aboard.");
};

export const loginUser = async (req, res, next) => {
  // Validate user information
  const { error, value } = loginUserValidator.validate(req.body);
  if (error) {
    return res.status(422).json(error);
  }
  // Find matching user record in database
  const user = await UserModel.findOne({
    email: value.email
  });

  if (!user) {
    return res
      .status(404)
      .json("User not found. Please sign up to create an account.");
  }
  // Compare incoming password with saved password
  const correctPassword = bcrypt.compareSync(value.password, user.password);
  if (!correctPassword) {
    return res.status(401).json("Invalid email or password. Please try again.");
  }
  // Generate access token for user
  const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "2h",
  });
  
  // Return Response
  return res.status(200).json({accessToken});
};


// Update user 
export const updateUser = async (req, res, next) => {
  // Validate request body
  const { error, value } = updateUserValidator.validate(req.body);
  if (error) {
    return res.status(422).json(error);
  }
  // Update user in database
  const result = await UserModel.findByIdAndUpdate(req.params.id, value, {
    new: true,
  });
  // return response
  res.status(200).json("User role successfully update!");
};

//Get current user.
export const getAuthenticatedUser = async (req, res, next) => {
  // Get User by using req.auth.id
  const result = await UserModel.findById(req.auth.id).select({
    password: false,
  });
  // Return response
  res.status(200).json(result);
};