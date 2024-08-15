import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Certification } from '../interfaces/certification.interface';
import { CreateCertificationDto } from '../dto/create-certification.dto';
import { UpdateCertificationDto } from '../dto/update-certification.dto';

@Injectable()
export class certficationService {
    constructor(
        @InjectModel('Certification') private readonly certficationModel: Model<Certification>,
    ) {}

    async create(certification: CreateCertificationDto): Promise<Certification> {
        try {
            const createCertification = new this.certficationModel(certification);
            return await createCertification.save();
        } catch (err) {
            throw new Error('Failed to create certification: ${err.message}');
        }
    }

    async update(id: string, certification: UpdateCertificationDto): Promise<Certification | null> {
        try {
            return await this.certficationModel.findByIdAndUpdate(id, certification, { new: true }).exec();
        } catch (err) {
            throw new Error('Failed to update certification: ${err.message}');
        }
    }

    async findAll(): Promise<Certification[]> {
        try {
            return await this.certficationModel.find().exec();
        } catch (err) {
            throw new Error('Failed to find all certification: ${err.message}');
        }
    }

    async findById(id: string): Promise<Certification | null> {
        try {
            return this.certficationModel.findById(id).exec();
        } catch (err) {
            throw new Error('Failed to find certification: ${err.message}');
        }
    }

    async delete(id: string): Promise<Certification | null> {
        try {
            return this.certficationModel.findByIdAndDelete(id).exec();
        } catch (err) {
            throw new Error('Failed to delete certification: ${err.message}');
        }
    }
}