import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonDataService } from '../../services/json-data.service';
import { Project, ProjectResponse } from '../../models/project.model';

@Component({
  selector: 'app-project-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css'],
})
export class ProjectOverviewComponent implements OnInit {
  project: Project | null = null;
  errorMessage: String | null = null;

  constructor(private jsonDataService: JsonDataService) {}

  ngOnInit(): void {
    this.jsonDataService.getProjectData().subscribe({
      next: (response: ProjectResponse) => {
        if (response && response.content) {
          this.project = response.content;
        } else {
          console.error('No project data received');
          this.errorMessage = 'No project data available.';
        }
      },
      error: (err) => {
        console.error('Error in subscription:', err);
        this.errorMessage =
          'Failed to load project data. Please try again later.';
      },
    });
  }
}
