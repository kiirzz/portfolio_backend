import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class CreateSkillDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsArray()
    @Type(() => String)
    list: string[] = [];
}