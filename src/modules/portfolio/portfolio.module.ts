import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PortfolioService } from './portfolio.service';
import { PortfolioController } from './portfolio.controller';
import { CertificationSchema } from './schemas/certification.schema';
import { EducationSchema } from './schemas/edcation.schema';
import { ProjectSchema } from './schemas/project.schema';
import { SkillSchema } from './schemas/skill.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "Certification", schema: CertificationSchema },
      { name: "Education", schema: EducationSchema },
      { name: "Project", schema: ProjectSchema },
      { name: "Skill", schema: SkillSchema },
    ])
  ],
  providers: [PortfolioService],
  controllers: [PortfolioController]
})
export class PortfolioModule {}
