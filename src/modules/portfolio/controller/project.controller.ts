import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProjectService } from '../services/project.service';
import { CreateProjectDto } from '../dto/Create-project.dto';
import { Project } from '../interfaces/project.interface';
import { UpdateProjectDto } from '../dto/Update-project.dto';

@Controller('project')
export class ProjectController {
    constructor(private readonly projectService: ProjectService){}

    @Post()
    create(@Body() project: CreateProjectDto): Promise<Project> {
        return this.projectService.create(project);
    }

    @Get()
    findAll(): Promise<Project[]> {
        return this.projectService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string): Promise<Project | null> {
        return this.projectService.findById(id);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() project: UpdateProjectDto
    ): Promise<Project | null> {
        return this.projectService.update(id, project);
    }

    @Delete(':id')
    delete(@Param('id') id: string): Promise<Project | null> {
        return this.projectService.delete(id);
    }
}