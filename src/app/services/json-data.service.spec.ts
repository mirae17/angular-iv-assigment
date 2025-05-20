import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectResponse } from '../models/project.model'; // Make sure this path is correct

@Injectable({
  providedIn: 'root',
})
export class JsonDataService {
  private projectUrl = 'assets/data/project.json'; // Or your API endpoint

  constructor(private http: HttpClient) {}

  getProjectData(): Observable<ProjectResponse> {
    //This tells Angular to expect the structure defined in ProjectResponse
    return this.http.get<ProjectResponse>(this.projectUrl);
  }
}
