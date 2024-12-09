import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = `${environment.apiUrl}/Posts/get-all-posts`;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    let response = this.http.get<Post[]>(this.apiUrl);
    return response;
  }
}
