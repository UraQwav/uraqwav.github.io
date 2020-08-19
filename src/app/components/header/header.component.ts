import { Component, OnInit, ElementRef, ViewChild, Directive, Input } from '@angular/core';
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
  changeThemeColor:boolean;
  Collor = '#fff';
  ategThemeCollor;
  ThemeCollorBackground;
  constructor(private elementRef: ElementRef) {
    this.headerHello = false;
    this.changeThemeColor = false;
  }
  ngOnInit(): void {
  }
  changeTheme(){
    if(this.changeThemeColor == false){
      this.changeThemeColor = true;
      setTimeout(()=>this.blackTheme(),712);
      this.ThemeCollorBackground = '#36383b';
    }
    else{
      this.changeThemeColor = false;
      setTimeout(()=>this.whiteTheme(),712);
      this.ThemeCollorBackground = '#fff';
    }
  }
  whiteTheme():any{
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fff';
    this.elementRef.nativeElement.ownerDocument.body.style.color = '';
    this.ategThemeCollor = '';
    this.Collor = '#fff';
  }
  blackTheme():any{
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#36383b';
    this.elementRef.nativeElement.ownerDocument.body.style.color = '#fff';
    this.ategThemeCollor = '#fff';
    this.Collor = '#000';
  }
 
}
