import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonDataService } from '../../services/json-data.service';
import { MapInfo } from '../../models/project.model';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map: MapInfo[] = []; // Use the MapInfo type for better type safety
  mapImage: string = ''; // Store the map image URL
  mapLink: string = ''; // Store the map link URL

  constructor(private jsonDataService: JsonDataService) {}

  ngOnInit() {
    this.jsonDataService.getProjectData().subscribe((data: any) => {
      if (data && data.map && data.map.length > 0) {
        this.map = data.map; // Assign map data
        this.mapImage = this.map[0]?.url || 'assets/default-map.png'; // Set the map image
        this.mapLink = this.map[0]?.link || ''; // Set the map link (fallback to empty string if not available)
        console.log('Map Data:', this.map); // Debugging
      } else {
        console.error('No map data available');
        this.mapImage = 'assets/default-map.png'; // Fallback image
        this.mapLink = ''; // No link available
      }
    });
  }
}
