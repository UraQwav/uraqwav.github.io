import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('opacityLeaveHello', [
      transition(':leave', [
        animate('1.2s', style({opacity: 0}))
      ])
     ])
  ]
})
export class HeaderComponent implements OnInit {

  headerHello:boolean;

  constructor() {
    this.headerHello = false;
   }

  ngOnInit(): void {
  }

}
