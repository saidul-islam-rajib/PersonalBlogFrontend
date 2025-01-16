import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaginatedDashboard } from 'src/app/core/interfaces/dashboard';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  paginatedData!: PaginatedDashboard;

  constructor(
    private router: Router,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.dashboardService.getPaginatedPosts().subscribe({
      next: (response) => {
        this.paginatedData = response;
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }

  openPostTab(id: any){
    this.router.navigate(['home/posts/'+id])
  }

  goToPage(pageIndex: number): void {
    this.dashboardService.getPaginatedPosts(pageIndex).subscribe({
      next: (response) => {
        this.paginatedData = response;
      },
      error: (err) => {
        console.error('Error:', err);
      },
    });
  }

}
