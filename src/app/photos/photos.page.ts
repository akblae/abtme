import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: 'photos.page.html',
  styleUrls: ['photos.page.scss']
})
export class PhotosPage {

  constructor(private router: Router) {}

  option = {
    slidesPerView: 3, 
    centeredSlides: false,
    loop: true,
    spaceBetween: 1,
    //autoplay: true,


  }

  vw(){
    this.router.navigate(['view'])
  }


}
