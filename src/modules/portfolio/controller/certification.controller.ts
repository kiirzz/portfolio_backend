import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { certficationService } from '../services/certification.service';
import { CreateCertificationDto } from '../dto/Create-certification.dto';
import { UpdateCertificationDto } from '../dto/Update-certification.dto';
import { Certification } from '../interfaces/certification.interface';

@Controller('certifications')
export class CertificationController {
    constructor(private readonly certificationService: certficationService){}

    @Post()
    create(@Body() createCertificationDto: CreateCertificationDto): Promise<Certification> {
        return this.certificationService.create(createCertificationDto);
    }

    @Get()
    findAll(): Promise<Certification[]> {
        return this.certificationService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string): Promise<Certification | null> {
        return this.certificationService.findById(id);
    }

    @Put(':id')
    update(
        @Param('id') id: string,
        @Body() updateCertificationDto: UpdateCertificationDto,
    ): Promise<Certification | null> {
        return this.certificationService.update(id, updateCertificationDto);
    }
    
    @Delete(':id')
    delete(@Param('id') id: string): Promise<Certification | null> {
        return this.certificationService.delete(id);
    }
}