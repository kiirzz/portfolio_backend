import {  IsString ,IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateEducationDto {
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    name?: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    class?: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    gpa?: string | null;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    time?: string;
}