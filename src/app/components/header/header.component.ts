import { Component, OnInit, ElementRef, ViewChild, Directive, Input, AfterViewInit } from '@angular/core';
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

export class HeaderComponent implements OnInit, AfterViewInit {

  headerHello:boolean;
  changeThemeColor:boolean;
  Collor = '#fff';
  ategThemeCollor;
  ThemeCollorBackground;
  elements;
  ismenu:Boolean=false;
  constructor(private elementRef: ElementRef) {
    this.headerHello = false;
    this.changeThemeColor = false;
    if(localStorage.getItem('Theme-color') !== null){
      this.changeThemeColor = true;
      this.blackTheme();
    }
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
   this.elements = this.elementRef.nativeElement.querySelectorAll('.item');
   
  }
  changeTheme(){
    if(this.changeThemeColor == false){
      this.changeThemeColor = true;
      setTimeout(()=>this.blackTheme(),712);
      this.ThemeCollorBackground = '#36383b';
      localStorage.setItem('Theme-color', 'black');
    }
    else{
      this.changeThemeColor = false;
      setTimeout(()=>this.whiteTheme(),712);
      this.ThemeCollorBackground = '#fff';
      localStorage.removeItem('Theme-color');
    }
  }
  whiteTheme():any{
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#fff';
    this.elementRef.nativeElement.ownerDocument.body.style.color = '';
    this.ategThemeCollor = '';
    this.Collor = '#fff';
    this.elements.nativeElement.style.backgroundColor = '#dc134c';
  }
  blackTheme():any{
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#36383b';
    this.elementRef.nativeElement.ownerDocument.body.style.color = '#fff';
    this.ategThemeCollor = '#fff';
    this.Collor = '#36383b';
  }
  menu(){
    if(this.ismenu==false)
      this.ismenu = true;
    else this.ismenu = false;
  }
}
