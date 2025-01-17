import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Topic } from '../interfaces/topic';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  private apiUrl = `${environment.baseUrl}/Topic/get-topics`;
  private getApiUrl(): string{
    return this.apiUrl;
  }

  constructor(private http: HttpClient) { }


  getAllTopics(): Observable<Topic[]>{
    let response = this.http.get<Topic[]>(this.getApiUrl()).pipe(
      retry(3),
      catchError(err => {
        console.error("Error fetching topics : ", err);
        return throwError(() => new Error('Failed to fetch topics after retries'));
      })
    );
    return response;
  }
}
