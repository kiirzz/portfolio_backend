import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateCertificationDto {
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    name?: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    time?: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    field?: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    prize?: string;
}