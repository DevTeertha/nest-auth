/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterDto } from './register.dto';
import { RegisterI } from './schema/register.schema';

@Injectable()
export class RegisterService {
  constructor(
    @InjectModel('users') private readonly RegisterModel: Model<RegisterI>,
  ) {}
  async registerUser(data: RegisterI): Promise<RegisterDto> {
    const newUser = new this.RegisterModel(data);
    const result = await newUser.save();
    return result;
  }
}
