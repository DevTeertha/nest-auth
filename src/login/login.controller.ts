/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { LoginService } from './login.service';
import { Body, Controller, Post, Put } from '@nestjs/common';
import { LoginDto } from './login.dto';

@Controller('api')
export class LoginController {
  constructor(private readonly LoginService: LoginService) {}
  @Post('login')
  async loginUser(@Body() loginData: LoginDto) {
    return await this.LoginService.loginAuth(loginData);
  }
  @Post('getUser')
  async getUser(@Body() userToken: any){
    return await this.LoginService.getUser(userToken.token);
  }
  @Put('changeUser')
  async chnageUser(@Body() deta: any){
    return await this.LoginService.changeUser(deta);
  }
}
