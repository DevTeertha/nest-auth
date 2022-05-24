/* eslint-disable prettier/prettier */
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    RegisterModule,
    LoginModule,
    MongooseModule.forRoot(
      'mongodb+srv://nestauth:vn9HwItn7En364bz@cluster0.9ekwx.mongodb.net/nest_auth?retryWrites=true&w=majority',
    ),
    JwtModule.register({ secret: 'ssh', signOptions: { expiresIn: '24h' } }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
