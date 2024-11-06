import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma-client/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { } // con esto ya puedo hacer consultas

    // Método para obtener todos los usuarios
    async getAllUsers(): Promise<User[]> {
        return this.prisma.user.findMany();  // busca las tareas de mi tabla papgg
    }
    async getUserById(id: number): Promise<User> {
        return this.prisma.user.findUnique({
            where: {
                id,
            },

        });  // busca las tareas por id 
    }
    async createUser(data: User): Promise<User> {
        return this.prisma.user.create({
            data: data
        });  // crea o asegura los datos del usario se creen
    }
    async updateUser(id: number, data: User): Promise<User> {
        return this.prisma.user.update({
            where: {
                id,
            },
            data: data
        });  // actualiza 
    }
    async deleteUser(id: number): Promise<User> {
        return this.prisma.user.delete({
            where: {
                id,
            },
        });  // busca las tareas de mi tabla papgg
    }




}
