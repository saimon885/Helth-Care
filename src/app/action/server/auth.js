"use server";
import { Collections, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
export const CreateUser = async (payload) => {
  const { nid, name, phone, email, password } = payload;
  if (!email & !password) {
    return null;
  }
  const isExist = await dbConnect(Collections.Users).findOne({ email });
  if (isExist) {
    return { messege: "already your email added" };
  }
  const newUser = {
    provider: "credantials",
    name,
    nid,
    phone,
    email,
    password: await bcrypt.hash(password, 14),
    createdAt: new Date(),
  };
  const result = await dbConnect(Collections.Users).insertOne(newUser);
  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
};

// sign in
export const SignInUser = async (payload) => {
  const { email, password } = payload;
  if (!email & !password) {
    return null;
  }
  const user = await dbConnect(Collections.Users).findOne({ email });
  if (!user) {
    return null;
  }
  const isMatched = await bcrypt.compare(password, user.password);
  if (isMatched) {
    return user;
  } else {
    return null;
  }
};
