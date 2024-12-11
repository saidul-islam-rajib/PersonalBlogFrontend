import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dashboard } from '../interfaces/dashboard';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = `${environment.apiUrl}/post/get-all-posts`;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Dashboard[]> {
    let response = this.http.get<Dashboard[]>(this.apiUrl);
    return response;
  }
}
