import { Component, OnInit,AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonDataService } from '../../services/json-data.service';
import Swiper from 'swiper';
import { Autoplay,Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-gallery',
  standalone: true,  
  imports: [CommonModule],  
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit,AfterViewInit {
  galleryImages: string[] = [];  

  constructor(private jsonDataService: JsonDataService) {}

  ngOnInit(): void {
    this.jsonDataService.getGallery().subscribe((data: string[]) => {
      this.galleryImages = data;  
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

