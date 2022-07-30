import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
})
export class CircleComponent implements OnInit {

  public friends: any = [
    {name: 'Louisse Laine', kind: 0},
    {name: 'Edbert Ocampo', kind: 0},
    {name: 'Marlene Tiamsim', kind: 1},
    {name: 'Jolieous Andreigh', kind: 1},
  ]

  constructor(private router: Router) { }

    option = {
      slidesPerView: 1.5, 
      centeredSlides: false,
      loop: true,
      spaceBetween: 1,
      //autoplay: true,
  }
  

  ngOnInit() {}

}
