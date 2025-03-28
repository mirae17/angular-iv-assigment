import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProjectOverviewComponent } from './components/project-overview/project-overview.component';
import { PropertyDetailsComponent } from './components/property-details/property-details.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectOverviewComponent,
    PropertyDetailsComponent,
    GalleryComponent,
    LayoutsComponent,
    DocumentsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get('/assets/general.json');
  }
}

// app.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: any;
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.getData().subscribe(response => {
      this.data = response;
    });
  }
}

