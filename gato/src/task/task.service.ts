import {Injectable} from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';
import {UpdateTaskDto} from './dto/update-task.dto';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class TaskService {
    constructor(private readonly prisma: PrismaService) {}

    create(createTaskDto: CreateTaskDto) {
        return this.prisma.task.create({
            data:createTaskDto
        })
    }

    findAll() {
        return this.prisma.task.findMany();
    }

    findOne(id: number) {
        return this.prisma.task.findUnique({
            where:{id}
        });
    }

    update(id: number, updateTaskDto: UpdateTaskDto) {
        return `This action updates a #${id} task`;
    }

    remove(id: number) {
        return `This action removes a #${id} task`;
    }
}
