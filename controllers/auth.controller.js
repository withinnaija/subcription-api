import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRE_IN } from "../config/env.js";

export const signUp = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { name, email, password } = req.body;

    const checkExistingUser = await User.findOne({ email });
    if (checkExistingUser) {
      const error = new Error("user already exists");
      error.statusCode = 409;
      throw error;
    }

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create(
      [{ name, email, password: hashPassword }],
      { session }
    );
    const token = jwt.sign({ userId: newUser[0]._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRE_IN,
    });
    await session.commitTransaction();
    session.endSession();
    res.status(201).json({
      sucess: true,
      message: "user succesfully created",
      data: {
        token,
        user: newUser[0],
      },
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};
export const signIn = async (req, res, next) => {};
export const signOut = async (req, res, next) => {};
