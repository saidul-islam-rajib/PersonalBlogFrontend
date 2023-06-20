import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RecentPostComponent } from './pages/recent-post/recent-post.component';
import { PostComponent } from './pages/post/post.component';

// {
//   path : 'lookup-type/edit/:id',
//   component: LookupTypeAddEditComponent,
//   canActivate:[AfterAuthGlobalGuard],
//   data: {
//     title: 'Edit Lookup Type',
//     reuse:false,
//     pageType : 'edit'
//   }
// },

const routes: Routes = [

  {
    path: 'home',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
      reuse: true,
      pageType : 'view'
    }
  },
  {
    path: 'home/posts/:id',
    component: PostComponent,
    data: {
      title: 'Dashboard',
      reuse: true,
      pageType : 'view'
    }
  },
  {
    path: 'topics',
    component: TopicsComponent,
    data: {
      title: 'Topics',
      reuse: true,
      pageType : 'view'
    }
  },
  {
    path: 'recent',
    component: RecentPostComponent,
    data: {
      title: 'Recent-Post',
      reuse: true,
      pageType : 'view'
    }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      title: 'Projects',
      reuse: true,
      pageType : 'view'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About',
      reuse: true,
      pageType : 'view'
    }
  },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
