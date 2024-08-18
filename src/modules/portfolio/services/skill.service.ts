import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill } from '../interfaces/skill.interface';
import { CreateSkillDto } from '../dto/Create-skill.dto';
import { UpdateSkillDto } from '../dto/Update-skill.dto';

@Injectable()
export class SkillService {
    constructor(
        @InjectModel('Skill') 
        private readonly skillModel: Model<Skill>,
    ) {}

    async create(skill: CreateSkillDto): Promise<Skill> {
        try {
            const createSkill = new this.skillModel(skill);
            return await createSkill.save();
        } catch (err) {
            throw new Error(`Failed to create skill: ${err.message}`);
        }
    }

    async findAll(): Promise<Skill[]> {
        try {          
            console.log("test");           
            return await this.skillModel.find().exec();
        } catch (err) {
            console.log(err.message);            
            throw new Error(`Failed to find all skill: ${err.message}`);
        }
    }

    async findById(id: string): Promise<Skill> {
        try {
            return await this.skillModel.findById(id).exec();
        } catch (err) {
            throw new Error(`Failed to find skill: ${err.message}`);
        }
    } 

    async update(id: string, skill: UpdateSkillDto): Promise<Skill> {
        try {
            return await this.skillModel.findByIdAndUpdate(id, skill, { new: true }).exec();
        } catch (err) {
            throw new Error(`Failed to update skill: ${err.message}`);
        }
    }

    async delete(id: string): Promise<Skill> {
        try {
            return await this.skillModel.findByIdAndDelete(id).exec();
        } catch (err) {
            throw new Error(`Failed to delete skill: ${err.message}`);
        }
    }
}