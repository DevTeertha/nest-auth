/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';

export interface RegisterI {
  fname: string;
  lname: string;
  username: string;
  password: string;
}
export const RegisterSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});
