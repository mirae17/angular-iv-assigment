import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonDataService } from '../../services/json-data.service';
import { MapInfo } from '../../models/project.model';

@Component({
  selector: 'app-map',
  standalone: true,  
  imports: [CommonModule],  
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  mapImage: string = '';  

  constructor(private jsonDataService: JsonDataService) {}

 map: any[] = [];

	ngOnInit() {
	  this.jsonDataService.getProjectData().subscribe(data => {
		if (data && data.map) {
		  this.map = data.map; // Assign map data
		  console.log("Map Data:", this.map); // Debugging
		}
	  });
	}

}
