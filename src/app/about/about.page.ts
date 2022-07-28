import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

  constructor() {}

  option = {
    slidesPerView: 1.5, 
    centeredSlides: false,
    loop: true,
    spaceBetween: 7,
    //autoplay: true,

  }

}
