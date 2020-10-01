import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-some-my-work',
  templateUrl: './some-my-work.component.html',
  styleUrls: ['./some-my-work.component.css']
})
export class SomeMyWorkComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  allProject(){
    this.router.navigate(["portfolio"]);
  }

}
