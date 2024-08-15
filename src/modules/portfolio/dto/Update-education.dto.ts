import {  IsString ,IsOptional } from 'class-validator';

export class UpdateEducationDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    class?: string;

    @IsString()
    @IsOptional()
    gpa?: string | null;

    @IsString()
    @IsOptional()
    time?: string;
}