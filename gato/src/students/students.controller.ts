import {Controller, Get} from '@nestjs/common';
import {StudentsService} from "./students.service";

@Controller('students')
export class StudentsController {

    //CREAR UN CONSTRUCTOR PRA INICIALIZAR EL SERVICIO

    constructor(private studentService:StudentsService) {}

        //CREAR UN METODO PARA OBTENER LA LISTA DE ESTUDIANTES

@Get()
getAllStudents(){
    return this.studentService.getAll()
    }
}
