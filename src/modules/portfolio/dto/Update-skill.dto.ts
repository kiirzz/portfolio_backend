import { Type } from "class-transformer";
import { IsArray, IsOptional, IsString, IsNotEmpty } from "class-validator";

export class UpdateSkillDto{
    @IsString()
    @IsOptional()
    @IsNotEmpty()
    name?: string;

    @IsOptional()
    @IsArray()
    @Type(() => String)
    @IsNotEmpty()
    list?: string[];
}