import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postUrl = `${environment.apiUrl}/post/3F13F2DB-D444-4901-B973-5B273965E425`;

  constructor(private http: HttpClient) { }
  getPostById(postId: string): Observable<Post> {
    console.log("post id : ", postId);

    const data_url = `${this.postUrl}`;
    let response = this.http.get<Post>(data_url);
    return response;
  }
}
