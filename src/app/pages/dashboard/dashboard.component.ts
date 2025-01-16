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
  pageIndex: number = 1;

  constructor(
    private router: Router,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.goToPage(this.pageIndex);
  }

  openPostTab(id: any){
    this.router.navigate(['home/posts/'+id])
  }

  goToPage(pageIndex: number): void {
    console.log("Page number : ", pageIndex);

    this.dashboardService.getPaginatedPosts(pageIndex).subscribe({
      next: (response) => {
        this.paginatedData = response;
        console.log("Response : ", this.paginatedData)
      },
      error: (err) => {
        console.error('Error:', err);
      },
    });
  }

  get totalPages(): number[] {
    if (!this.paginatedData || !this.paginatedData.pageSize) {
      return [];
    }
    return Array.from(
      { length: Math.ceil(this.paginatedData.count / this.paginatedData.pageSize) },
      (_, i) => i + 1
    );
  }


}
