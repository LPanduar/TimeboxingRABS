import { Module } from '@nestjs/common';
import { UserService } from './User.service';
import { UserController } from './User.controller';
import { PrismaModule } from '../prisma-client/prisma.module';

@Module({
  
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule],
})
export class UserModule { }
