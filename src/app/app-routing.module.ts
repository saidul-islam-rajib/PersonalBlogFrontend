import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RecentPostComponent } from './pages/recent-post/recent-post.component';

const routes: Routes = [
  { path:'', component: DashboardComponent},
  { path:'home', component: DashboardComponent},
  { path:'topics', component: TopicsComponent},
  { path:'recent', component: RecentPostComponent},
  { path:'projects', component: ProjectsComponent},
  { path:'about', component: AboutComponent},

  { path:'admin/login/rajib', component: AdminLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
