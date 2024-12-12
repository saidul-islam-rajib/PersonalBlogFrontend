import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommentInterface } from '../interfaces/comments';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private commentUrl = `${environment.apiUrl}/comment/get-comments-by-post-id`;

  constructor(private http: HttpClient) {}

  getCommentByPostId(postId: string): Observable<CommentInterface[]> {
    const data_url = `${this.commentUrl}?postId=${postId}`;
    let response = this.http.get<CommentInterface[]>(data_url);
    return response;
  }
}
