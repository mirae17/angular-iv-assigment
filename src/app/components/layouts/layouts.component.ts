import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonDataService } from '../../services/json-data.service';
import { Layout } from '../../models/project.model';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit, AfterViewInit {
  layouts: Layout[] = [];
  swiperInstance: Swiper | null = null; // Store the Swiper instance

  constructor(private jsonDataService: JsonDataService) {}

  ngOnInit(): void {
    this.jsonDataService.getLayouts().subscribe((data: Layout[]) => {
      this.layouts = data;
      // Reinitialize Swiper after data is loaded
      if (this.swiperInstance) {
        this.swiperInstance.destroy(true, true); // Destroy the old instance
      }
      this.initializeSwiper();
    });
  }

  ngAfterViewInit(): void {
    this.initializeSwiper(); // Initial Swiper setup
  }

  initializeSwiper(): void {
    if (this.layouts.length > 0) { // Only initialize if layouts are loaded
      this.swiperInstance = new Swiper('.mySwiper', {
        modules: [Autoplay, Navigation, Pagination],
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
          dynamicBullets: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }
}