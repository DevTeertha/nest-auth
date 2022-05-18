/* eslint-disable prettier/prettier */
import mongoose, { ObjectId } from 'mongoose';

export interface LoginI {
  _id: ObjectId;
  username: string;
  password: string;
}
export const LoginSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});
