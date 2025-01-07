import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experience } from '../interfaces/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiUrl = `${environment.apiUrl}/experience/get-experiences`

  constructor(private http: HttpClient) { }

  getExperiences(): Observable<Experience[]>{
    console.log("loading method called!")
    let response = this.http.get<Experience[]>(this.apiUrl);

    console.log("list of experience : ", response);

    return response;
  }
}
