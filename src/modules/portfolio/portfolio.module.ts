import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PortfolioService } from './portfolio.service';
import { PortfolioController } from './portfolio.controller';
import { CertificationSchema } from './schemas/certification.schema';
import { EducationSchema } from './schemas/edcation.schema';
import { ProjectSchema } from './schemas/project.schema';
import { SkillSchema } from './schemas/skill.schema';
import { CertificationController } from './controller/certification.controller';
import { EducationController } from './controller/education.controller';
import { SkillController } from './controller/skill.controller';
import { ProjectController } from './controller/project.controller';
import { CertificationService } from './services/certification.service';
import { EducationService } from './services/education.service';
import { SkillService } from './services/skill.service';
import { ProjectService } from './services/project.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Certification", schema: CertificationSchema },
      { name: "Education", schema: EducationSchema },
      { name: "Project", schema: ProjectSchema },
      { name: "Skill", schema: SkillSchema },
    ])
  ],
  providers: [
    PortfolioService, 
    CertificationService, 
    EducationService, 
    SkillService, 
    ProjectService
  ],
  controllers: [
    PortfolioController, 
    CertificationController, 
    EducationController, 
    SkillController, 
    ProjectController
  ]
})
export class PortfolioModule {}
