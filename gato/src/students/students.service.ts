import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentsService {

    //CREAR UN ARREGLO

    private data=['Victor', 'Juan', 'Pedro', 'Maria', 'Guillermo']

    //CREAR UN METODO QUE ME DEVUELVA EL CONTENIDO DEL ARREGLO

    getAll(){
        return this.data

    }
}
