import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonDataService } from '../../services/json-data.service';
import {
  Project,
  ProjectDetail,
  PropertyInfo,
  ProjectResponse,
} from '../../models/project.model';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
})
export class PropertyDetailsComponent implements OnInit {
  projectDetails: ProjectDetail[] = [];
  propertyInfo: PropertyInfo[] = [];

  constructor(private jsonDataService: JsonDataService) {}

  ngOnInit(): void {
    this.jsonDataService.getProjectData().subscribe(
      (response: ProjectResponse) => {
        const data: Project = response.content;
        console.log('✅ Full Project Data:', data);
        this.projectDetails = data.projectDetails || [];
        this.propertyInfo = data.propertyInfo || [];
        console.log('✅ Assigned Project Details:', this.projectDetails);
        console.log('✅ Assigned Property Info:', this.propertyInfo);
      },
      (error) => {
        console.error('❌ Error fetching project data:', error);
      }
    );
  }
}
