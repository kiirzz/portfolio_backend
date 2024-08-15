import { IsOptional, IsString } from 'class-validator';

export class UpdateCertificationDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    time?: string;

    @IsString()
    @IsOptional()
    field?: string;

    @IsString()
    @IsOptional()
    prize?: string;
}