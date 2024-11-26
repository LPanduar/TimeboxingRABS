import { IsNumber, IsOptional, IsString} from "class-validator";

export class CreateTaskDto {
    @IsString()
    title:string;

    @IsOptional()
    @IsString()
    description;

    @IsString()
    priority;

    @IsNumber()
    user_id;

    @IsNumber()
    status;
}
