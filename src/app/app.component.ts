import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rajib';
  constructor(
    private router: Router
  ) {

  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const currentRoute = this.router.url;
    this.router.navigateByUrl(currentRoute);
  }
}
