import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

class TechnologyDto {
    @IsArray()
    @Type(() => String)
    @IsOptional()
    frontend?: string[];
    
    @IsArray()
    @Type(() => String)
    @IsOptional()
    backend?: string[]; 
    
    @IsArray()
    @Type(() => String)
    @IsOptional()
    database?: string[];
    
    @IsArray()
    @Type(() => String)
    @IsOptional()
    other?: string[]; 
}

class LinkDto {
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    name?: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    data?: string;
}

export class UpdateProjectDto {
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
    image?: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    description?: string;

    @IsNumber()
    @IsOptional()
    @IsNotEmpty()
    size?: number;

    @IsArray()
    @IsOptional()
    @Type(() => String)
    functions?: string[];

    @IsOptional()
    @ValidateNested()
    @Type(() => TechnologyDto)
    technology?: TechnologyDto;

    @IsOptional()
    @ValidateNested()
    @Type(() => LinkDto)
    link?: LinkDto;
}