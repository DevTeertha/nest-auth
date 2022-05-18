/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { LoginService } from './login.service';
import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './login.dto';

@Controller('api')
export class LoginController {
  constructor(private readonly LoginService: LoginService) {}
  @Post('login')
  async loginUser(@Body() loginData: LoginDto) {
    return await this.LoginService.loginAuth(loginData);
  }
}
