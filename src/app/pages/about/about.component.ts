import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/core/interfaces/experience';
import { CalculateDurationService } from 'src/app/core/services/common/calculate-duration.service';
import { ExperienceService } from 'src/app/core/services/experience.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  experiences:  Experience[] = [];

  constructor(
    private experienceService : ExperienceService,
    private durationService: CalculateDurationService
  ){}

  ngOnInit(): void{
    this.loadExperiences();
  }

  loadExperiences(): void {
    this.experienceService.getExperiences().subscribe({
      next:(data) => {
        console.log("Experience data : ", data);
        this.experiences = data;
      }
    })
  }

  calculateDuration(startDate: Date, endDate: Date, isCurrentEmployee: boolean): string {
    return this.durationService.calculateWorkingDuration(startDate, endDate);
  }
}
