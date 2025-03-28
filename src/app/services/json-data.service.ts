import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { ProjectResponse, Project, PropertyInfo,ProjectDetail, DocumentInfo, Layout, MapInfo } from '../models/project.model'; 

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  private jsonUrl = '/assets/general.json';

  constructor(private http: HttpClient) {}

getProjectData(): Observable<Project> {
  return this.http.get<ProjectResponse>(this.jsonUrl).pipe(
    map((response: ProjectResponse) => response.content) // ✅ Extract `content`
  );
}



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
      map(project => project.gallery) // ✅ Extract `gallery` directly from `Project`
    );
  }

  getLayouts(): Observable<Layout[]> {
    return this.getProjectData().pipe(
      map(project => project.layouts) // ✅ Extract `layouts` directly from `Project`
    );
  }
getDocuments(): Observable<DocumentInfo[]> {
  return this.getProjectData().pipe(
    map(project => project.documents) // ✅ Extract `documents` from `Project`
  );
}


  getMap(): Observable<MapInfo[]> {
    return this.getProjectData().pipe(
      map(project => project.map) // ✅ Extract `map` directly from `Project`
    );
  }
}
