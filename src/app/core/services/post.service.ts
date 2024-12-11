import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postUrl = `${environment.apiUrl}/post`;

  constructor(private http: HttpClient) { }

  getPostById(postId: string): Observable<Post> {
    const data_url = `${this.postUrl}/${postId}/test`;
    let response = this.http.get<Post>(data_url);
    return response;
  }
}
