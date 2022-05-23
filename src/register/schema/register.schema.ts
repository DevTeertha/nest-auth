/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';

export interface RegisterI {
  fname: string;
  lname: string;
  username: string;
  _id: any;
}
export interface RegisterResponse {
  status: boolean,
  message: string,
  data: RegisterI | object
}
export const RegisterSchema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});
