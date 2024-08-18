import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsNumber, IsString, ValidateNested } from "class-validator";

class TechnologyDto {
    @IsArray()
    @Type(() => String)
    frontend: string[] = [];
    
    @IsArray()
    @Type(() => String)
    backend: string[] = []; 
    
    @IsArray()
    @Type(() => String)
    database: string[] = [];
    
    @IsArray()
    @Type(() => String)
    other: string[] = []; 
}

class LinkDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    data: string;
}

export class CreateProjectDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    time: string;

    @IsString()
    image: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsNotEmpty()
    size: number;

    @IsArray()
    @Type(() => String)
    functions: string[];

    @ValidateNested()
    @Type(() => TechnologyDto)
    technology: TechnologyDto;

    @ValidateNested()
    @Type(() => LinkDto)
    link: LinkDto;
}