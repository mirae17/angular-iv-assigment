import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ProjectResponse, Project, PropertyInfo, ProjectDetail, DocumentInfo, Layout, MapInfo } from '../models/project.model'; 

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  private jsonUrl = '/assets/general.json';

  constructor(private http: HttpClient) {}

  getProjectData(): Observable<ProjectResponse> {
    return this.http.get<ProjectResponse>(this.jsonUrl);
  }

  // Other methods remain unchanged
  getProjectDetails(): Observable<ProjectDetail[]> {
    return this.getProjectData().pipe(
      map(project => {
        console.log("Mapping Project Details:", project);
        return project.projectDetails || [];
      })
    );
  }

  getPropertyInfo(): Observable<PropertyInfo[]> {
    return this.getProjectData().pipe(
      map(project => {
        console.log("Mapping Property Info:", project);
        return project.propertyInfo || [];
      })
    );
  }

  getGallery(): Observable<string[]> {
    return this.getProjectData().pipe(
      map(project => project.gallery)
    );
  }

  getLayouts(): Observable<Layout[]> {
    return this.getProjectData().pipe(
      map(project => project.layouts)
    );
  }

  getDocuments(): Observable<DocumentInfo[]> {
    return this.getProjectData().pipe(
      map(project => project.documents)
    );
  }

  getMap(): Observable<MapInfo[]> {
    return this.getProjectData().pipe(
      map(project => project.map)
    );
  }
}