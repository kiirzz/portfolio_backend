import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEducationDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    class: string;

    @IsString()
    @IsOptional()
    gpa: string | null;

    @IsString()
    @IsNotEmpty()
    time: string;
}