import { Component, OnInit } from '@angular/core';
import { AdditionalSkill } from 'src/app/core/interfaces/additional-skill';
import { Education } from 'src/app/core/interfaces/education';
import { Experience } from 'src/app/core/interfaces/experience';
import { Publication } from 'src/app/core/interfaces/publication';
import { AdditionalSkillService } from 'src/app/core/services/additional-skill.service';
import { CalculateDurationService } from 'src/app/core/services/common/calculate-duration.service';
import { EducationService } from 'src/app/core/services/education.service';
import { ExperienceService } from 'src/app/core/services/experience.service';
import { PublicationService } from 'src/app/core/services/publication.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  experiences:  Experience[] = [];
  educationList: Education[] = [];
  publicationList: Publication[] = [];
  additionalSkillList: AdditionalSkill[] = [];

  constructor(
    private experienceService : ExperienceService,
    private durationService: CalculateDurationService,
    private educationService: EducationService,
    private publicationService: PublicationService,
    private additionalSkillService: AdditionalSkillService
  ){}

  ngOnInit(): void{
    this.loadExperiences();
    this.loadEducations();
    this.loadPublication();
    this.loadAdditionalSkill();
  }

  loadExperiences(): void {
    this.experienceService.getExperiences().subscribe({
      next:(data) => {
        this.experiences = data;
      },
      error: (err) => {
        console.error('Experience Error:', err);
      }
    });
  }

  loadEducations(): void{
    this.educationService.getEducations().subscribe({
      next:(data) => {
        this.educationList = data;
      },
      error: (err) => {
        console.error('Education Error:', err);
      }
    });
  }

  loadPublication(): void{
    this.publicationService.getPublications().subscribe({
      next:(data) => {
        this.publicationList = data;
      },
      error: (err) => {
        console.error("Publication Error: ", err);
      }
    });
  }

  loadAdditionalSkill(): void{
    this.additionalSkillService.getAdditionalSkills().subscribe({
      next:(data) => {
        this.additionalSkillList = data;
        console.log("Additional list : ", this.additionalSkillList);
      },
      error: (err) => {
        console.error("Additional Skill Error: ", err);
      }
    });
  }

  calculateDuration(startDate: Date, endDate: Date, isCurrentEmployee: boolean): string {
    return this.durationService.calculateWorkingDuration(startDate, endDate);
  }
}
