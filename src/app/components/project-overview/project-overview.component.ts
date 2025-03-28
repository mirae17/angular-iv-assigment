import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonDataService } from '../../services/json-data.service';
import { Project, ProjectResponse } from '../../models/project.model';

@Component({
  selector: 'app-project-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {
  project: Project | null = null; 

  constructor(private jsonDataService: JsonDataService) {}

  ngOnInit(): void {
    this.jsonDataService.getProjectData().subscribe((data: any) => {
      if (data?.content) {
        this.project = data.content; 
      } else {
        console.error("Invalid JSON structure:", data);
      }
    });
  }
}
