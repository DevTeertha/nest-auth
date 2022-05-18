/* eslint-disable prettier/prettier */
import { ObjectId } from 'mongoose';

export class LoginDto {
  readonly _id?: ObjectId;
  readonly fname?: string;
  readonly lname?: string;
  readonly username: string;
  readonly password: string;
}
