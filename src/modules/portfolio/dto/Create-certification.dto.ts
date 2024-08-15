import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCertificationDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    time: string;

    @IsString()
    @IsNotEmpty()
    field: string;

    @IsString()
    @IsNotEmpty()
    prize: string;
}