import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EducationService } from '../services/education.service';
import { CreateEducationDto } from '../dto/Create-education.dto';
import { Education } from '../interfaces/edcation.interface';
import { UpdateEducationDto } from '../dto/Update-education.dto';

@Controller('education')
export class EducationController {
    constructor(private readonly educationService: EducationService){}

    @Post()
    create(@Body() education: CreateEducationDto): Promise<Education> {
        return this.educationService.create(education);
    }

    @Get()
    findAll(): Promise<Education[]> {
        return this.educationService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string): Promise<Education | null> {
        return this.educationService.findById(id);
    }

    @Put(':id')
    update(
        @Param('id') id: string, 
        @Body() education: UpdateEducationDto
    ): Promise<Education | null> {
        return this.educationService.update(id, education);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<Education | null> {
        return this.educationService.delete(id);
    }
}