import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {

  nm = 'Ana Karl Tatlonghari';
  addr = 'Pallocan West, Batangas City';
  bday = 'September 6, 2000';
  cont = '09166865227';

  constructor(private router: Router) { }

  ngOnInit() {}

}


