/* eslint-disable prettier/prettier */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RegisterService } from './register.service';
import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './register.dto';
import * as bcrypt from 'bcrypt';

@Controller('api')
export class RegisterController {
  constructor(private readonly RegisterService: RegisterService) {}
  @Post('register')
  async registerUser(@Body() RegisterData: RegisterDto) {
    const { fname, lname, username, password } = RegisterData;
    const encryptedPass = await bcrypt.hash(password, 5);
    const isMatch = await bcrypt.compare(password, encryptedPass);
    if(isMatch){
      return this.RegisterService.registerUser({
        fname,
        lname,
        username,
        password: encryptedPass,
      });
    }else{
      return {
        status: false,
        message: "Registration Failed!",
        data: {}
      }
    }
  }
}
