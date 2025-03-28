import { Component, OnInit,AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonDataService } from '../../services/json-data.service';
import { Layout } from '../../models/project.model';
import Swiper from 'swiper';
import { Autoplay,Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-layouts',
  standalone: true,  
  imports: [CommonModule],  
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit,AfterViewInit {
  layouts: Layout[] = [];  

  constructor(private jsonDataService: JsonDataService) {}

  ngOnInit(): void {
    this.jsonDataService.getLayouts().subscribe((data: Layout[]) => {
      this.layouts = data;  
    });
  }
  
  ngAfterViewInit(): void {
    setTimeout(() => {
      new Swiper('.mySwiper', {
        modules: [Autoplay, Navigation, Pagination], // Ensure modules are loaded
        slidesPerView: 4, 
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
		  dynamicBullets:true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }, 500); 
  }
}
