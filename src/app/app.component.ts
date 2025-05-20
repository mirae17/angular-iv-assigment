import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JsonDataService } from './services/json-data.service';
import { Project, ProjectResponse } from './models/project.model';
import { ProjectOverviewComponent } from './components/project-overview/project-overview.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { MapComponent } from './components/map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProjectOverviewComponent,
    PropertyDetailsComponent,
    GalleryComponent,
    LayoutsComponent,
    DocumentsComponent,
    MapComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  projectData: Project | null = null;

  constructor(private jsonDataService: JsonDataService) {}

  ngOnInit() {
    this.jsonDataService.getProjectData().subscribe((data: ProjectResponse) => {
      this.projectData = data.content; // Access the content property
      console.log('AppComponent Project Data:', this.projectData); // Debugging
    });
  }
}
