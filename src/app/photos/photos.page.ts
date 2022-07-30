import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: 'photos.page.html',
  styleUrls: ['photos.page.scss']
})
export class PhotosPage {

  constructor() {}

  option = {
    slidesPerView: 3, 
    centeredSlides: false,
    loop: true,
    spaceBetween: 1,
    //autoplay: true,


  }


}
