import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    LoginModule,
    RegisterModule,
    MongooseModule.forRoot(
      'mongodb+srv://nestauth:vn9HwItn7En364bz@cluster0.9ekwx.mongodb.net/nest_auth?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
