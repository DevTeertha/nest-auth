/* eslint-disable prettier/prettier */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RegisterService } from './register.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
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
    console.log('Encrypted Pass: ', encryptedPass);
    console.log('isMatch: ', isMatch);
    return this.RegisterService.registerUser({
      fname,
      lname,
      username,
      password: encryptedPass,
    });
  }
}
