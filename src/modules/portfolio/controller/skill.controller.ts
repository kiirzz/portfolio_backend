import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SkillService } from '../services/skill.service';
import { CreateSkillDto } from '../dto/Create-skill.dto';
import { Skill } from '../interfaces/skill.interface';
import { UpdateSkillDto } from '../dto/Update-skill.dto';

@Controller('skill')
export class SkillController {
    constructor(private readonly skillService: SkillService){}

    @Post()
    create(@Body() skill: CreateSkillDto): Promise<Skill> {
        return this.skillService.create(skill);
    }

    @Get()
    findAll(): Promise<Skill[]> {
        console.log(123);        
        return this.skillService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string): Promise<Skill | null> {
        return this.skillService.findById(id);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() skill: UpdateSkillDto
    ): Promise<Skill | null> {
        return this.skillService.update(id, skill);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<Skill> {
        return this.skillService.delete(id);
    }
}