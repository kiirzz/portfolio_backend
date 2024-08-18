import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Education } from '../interfaces/edcation.interface';
import { CreateEducationDto } from '../dto/Create-education.dto';
import { UpdateEducationDto } from '../dto/Update-education.dto';

@Injectable()
export class EducationService {
    constructor(
        @InjectModel('Education') 
        private readonly educationModel: Model<Education>,
    ) {}

    async create(education: CreateEducationDto): Promise<Education> {
        try {
            const createEducation = new this.educationModel(education);
            return await createEducation.save(); 
        } catch (err) {
            throw new Error('Failed to create education: ${err.message}');
        }
    }

    async findAll(): Promise<Education[]> {
        try {
            return await this.educationModel.find().exec();
        } catch (err) {
            throw new Error('Failed to find all education: ${err.message}');
        }
    }

    async findById(id: string): Promise<Education | null> {
        try {
            return await this.educationModel.findById(id).exec();
        } catch (err) {
            throw new Error('Failed to find education: ${err.message}');
        }
    }

    async update(id: string, education: UpdateEducationDto): Promise<Education | null> {
        try {
            return await this.educationModel.findByIdAndUpdate(id, education, { new: true }).exec();
        } catch (err) {
            throw new Error('Failed to update education: ${err.message}');
        }
    }

    async delete(id: string): Promise<Education | null> {
        try {
            return await this.educationModel.findByIdAndDelete(id).exec();
        } catch (err) {
            throw new Error('Failed to delete education: ${err.message}');
        }
    }
}