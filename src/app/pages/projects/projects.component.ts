import { Component } from '@angular/core';
import { Project } from 'src/app/core/interfaces/project';
import { ProjectService } from 'src/app/core/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projectList: Project[] = [];
  constructor(
    private projectService : ProjectService
  ){
  }

  ngOnInit(): void{
    this.laodProject();
  }

  laodProject(): void{
    this.projectService.getProject().subscribe({
      next:(data) => {
        this.projectList = data;
        console.log("Projects : ", this.projectList);
      },
      error: (err) => {
        console.error("Project Error: ", err);
      }
    });
  }
}
