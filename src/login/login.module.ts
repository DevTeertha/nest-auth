/* eslint-disable prettier/prettier */
import { LoginController } from './login.controller';
import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginSchema } from './schema/login.schema';
import { JwtModule } from '@nestjs/jwt';

const jwtSecret = '123456789';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'users', schema: LoginSchema }]),
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
