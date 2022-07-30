import { Component } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: 'interest.page.html',
  styleUrls: ['interest.page.scss']
})
export class InterestPage {

  constructor() {}

  option = {
    slidesPerView: 1.5, 
    centeredSlides: false,
    loop: true,
    spaceBetween: 1,
    //autoplay: true,
}

}
