import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonDataService } from '../../services/json-data.service';
import { ProjectDetail, PropertyInfo, DocumentInfo } from '../../models/project.model';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  documents: DocumentInfo[] = []; // ✅ Store document data

  constructor(private jsonDataService: JsonDataService) {}

  ngOnInit(): void {
    this.jsonDataService.getDocuments().subscribe(
      (data: DocumentInfo[]) => {
        console.log("Fetched Documents:", data);
        this.documents = data;
      },
      (error) => {
        console.error("Error fetching documents:", error);
      }
    );
  }
}
