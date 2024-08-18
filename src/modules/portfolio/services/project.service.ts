import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from '../interfaces/project.interface';
import { CreateProjectDto } from '../dto/Create-project.dto';
import { UpdateProjectDto } from '../dto/Update-project.dto';

@Injectable()
export class ProjectService {
    constructor(
        @InjectModel('Project') 
        private readonly projectModel: Model<Project>,
    ) {}

    async create(project: CreateProjectDto): Promise<Project> {
        try {
            const createProject = new this.projectModel(project);
            return await createProject.save();
        } catch (err) {
            throw new Error('Failed to create project: ${err.message}');
        }
    }
    
    async findAll(): Promise<Project[]> {
        try {
            const rawProjects = await this.projectModel.find().exec();
            let newProjectArray = [], arrayEmelent = [];
            if (rawProjects.length !== 0) {
                if (rawProjects.length % 2 === 0) {
                    for (let i = 0; i < rawProjects.length; i += 2) {
                        arrayEmelent = [rawProjects[i], rawProjects[i+1]];
                        newProjectArray.push(arrayEmelent);
                    }
                }
            }
            return newProjectArray;
        } catch (error) {
            throw new Error('Failed to find all project: ${err.message}');
        }
    }

    async findById(id: string): Promise<Project | null> {
        try {
            return await this.projectModel.findById(id).exec();
        } catch (err) {
            throw new Error('Failed to find project: ${err.message}');
        }
    }

    async update(id: string, project: UpdateProjectDto): Promise<Project | null> {
        try {
            return await this.projectModel.findByIdAndUpdate(id, project, { new: true }).exec();
        } catch (error) {
            throw new Error('Failed to update project: ${err.message}');
        }
    }

    async delete(id: string): Promise<Project | null> {
        try {   
            return await this.projectModel.findByIdAndDelete(id).exec();
        } catch (error) {
            throw new Error('Failed to delete project: ${err.message}');
        }
    }
}