import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Ajusta la ruta según tu estructura de carpetas

@Module({
  imports: [PrismaModule], // Asegúrate de importar PrismaModule
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
