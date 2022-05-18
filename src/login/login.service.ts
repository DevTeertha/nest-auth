/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginI } from './schema/login.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

interface loginI {
  username: string;
  password: string;
}

@Injectable()
export class LoginService {
  constructor(
    @InjectModel('users') private readonly LoginModel: Model<LoginI>,
    private jwtService: JwtService,
  ) {}

  async loginAuth(data: loginI): Promise<any> {
    const loginUser = await this.LoginModel.findOne({
      username: data.username,
    });
    if (loginUser) {
      const isMatch = await bcrypt.compare(data.password, loginUser.password);
      if (isMatch) {
        const payload = { username: loginUser.username, _id: loginUser._id };
        return {
          username: loginUser.username,
          token: this.jwtService.sign(payload),
        };
      } else {
        return null;
      }
    }
    return null;
  }
}
