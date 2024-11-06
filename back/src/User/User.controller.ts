import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { UserService } from './User.service';
import { User } from '@prisma/client';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        const userFound = await this.userService.getUserById(Number(id));
        if (!userFound) throw new NotFoundException('User not found');
        return userFound;
        
    }

    @Post()
    async createUser(@Body() data: User) {
        return this.userService.createUser(data);
    }

    @Put(':id')
    async updateUser(@Param('id') id: string, @Body() data: User) {
        try {
            return await this.userService.updateUser(Number(id), data);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            throw new NotFoundException("User aun no creado");
        }
    }
    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        try {
            return await this.userService.deleteUser(Number(id));
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            throw new NotFoundException("User not exist");
        }
    }

}
