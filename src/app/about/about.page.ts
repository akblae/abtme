import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

  constructor(private router: Router) {}

  option = {
    slidesPerView: 3, 
    centeredSlides: false,
    loop: true,
    spaceBetween: 1,
    //autoplay: true,

  }

 
}
