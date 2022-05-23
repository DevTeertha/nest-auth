/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterDto } from './register.dto';
import { RegisterResponse } from './schema/register.schema';

@Injectable()
export class RegisterService {
  constructor(
    @InjectModel('users') private readonly RegisterModel: Model<RegisterDto>,
  ) {}
  async registerUser(data: RegisterDto): Promise<RegisterResponse> {
    const isExsist = await this.RegisterModel.findOne({
      username: data.username,
    });
    if (isExsist) {
      return {
        status: false,
        message: 'User already registered!',
        data: {},
      };
    }else{
      const newUser = new this.RegisterModel(data);
      const result = await newUser.save();
      return {
        status: true,
        message: 'Registration Successful!',
        data: {
          fname: result.fname,
          lname: result.lname,
          username: result.username,
          _id: result._id,
        },
      };
    }
  }
}
