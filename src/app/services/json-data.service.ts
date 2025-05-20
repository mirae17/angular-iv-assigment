import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {
  ProjectResponse,
  Project,
  PropertyInfo,
  ProjectDetail,
  DocumentInfo,
  Layout,
  MapInfo,
} from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class JsonDataService {
  private jsonUrl = '/assets/general.json';

  constructor(private http: HttpClient) {}

  getProjectData(): Observable<ProjectResponse> {
    return this.http.get<ProjectResponse>(this.jsonUrl);
  }

  // ✅ All the following methods are fixed to extract `.content`
  getProjectDetails(): Observable<ProjectDetail[]> {
    return this.getProjectData().pipe(
      map((response) => {
        const project = response.content;
        console.log('Mapping Project Details:', project);
        return project.projectDetails || [];
      })
    );
  }

  getPropertyInfo(): Observable<PropertyInfo[]> {
    return this.getProjectData().pipe(
      map((response) => response.content.propertyInfo || [])
    );
  }

  getGallery(): Observable<string[]> {
    return this.getProjectData().pipe(
      map((response) => response.content.gallery || [])
    );
  }

  getLayouts(): Observable<Layout[]> {
    return this.getProjectData().pipe(
      map((response) => response.content.layouts || [])
    );
  }

  getDocuments(): Observable<DocumentInfo[]> {
    return this.getProjectData().pipe(
      map((response) => response.content.documents || [])
    );
  }

  getMap(): Observable<MapInfo[] | undefined> {
    return this.getProjectData().pipe(map((response) => response.content.map));
  }
}
