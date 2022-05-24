/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginI, UserI } from './schema/login.schema';
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
    @InjectModel('users') private readonly UserModal: Model<UserI>,
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
          status: true,
          message: 'Login Successful!',
          data: {
            username: loginUser.username,
            token: this.jwtService.sign(payload, { expiresIn: '24h' }),
          },
        };
      } else {
        return {
          status: false,
          message: 'Login Failed!',
          data: {},
        };
      }
    }
    return {
      status: false,
      message: 'Login Failed!',
      data: {},
    };
  }
  async getUser(token: string): Promise<any> {
    try {
      const isValid = this.jwtService.verify(token);
      if (isValid?.username) {
        const userDetails = await this.UserModal.findOne({
          email: isValid?.username,
        });
        return {
          status: true,
          message: 'Successful!',
          data: {
            _id: userDetails._id,
            fname: userDetails.fname,
            lname: userDetails.lname,
            username: userDetails.username,
          },
        };
      } else {
        return {
          status: false,
          message: 'Wrong Token!',
          data: {},
        };
      }
    } catch (error) {
      return {
        status: false,
        message: 'Wrong Token!',
        data: {},
      };
    }
  }
  async changeUser(data: any) {
    console.log("data: ",data);
    const userDetails = await this.UserModal.updateMany(
      {
        username: data.username,
      },
      {
        fname: data.fname,
        lname: data.lname,
      },
    );
    if(userDetails.modifiedCount>0){
      return {
        status: true,
        message: "Updated Successfully!"
      }
    }else{
      return {
        status: false,
        message: "Cannot Be Update! Try Again"
      }
    }
  }
}
