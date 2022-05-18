/* eslint-disable prettier/prettier */
import { RegisterController } from './register.controller';
import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterSchema } from './schema/register.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'users', schema: RegisterSchema }]),
  ],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}
