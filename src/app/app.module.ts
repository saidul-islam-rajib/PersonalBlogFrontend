import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { PagesComponent } from './pages/pages.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { TopicsComponent } from './pages/topics/topics.component';
import { FeaturedPostComponent } from './pages/featured-post/featured-post.component';
import { PopularTagsComponent } from './pages/popular-tags/popular-tags.component';
import { RecentPostComponent } from './pages/recent-post/recent-post.component';
import { FooterComponent } from './pages/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    ProjectsComponent,
    AboutComponent,
    TopicsComponent,
    FeaturedPostComponent,
    PopularTagsComponent,
    RecentPostComponent,
    FooterComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
