import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../../Data/portfolio'
@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {
  items: Array<Portfolio> = [];
  nameArray: Array<string> = ['Shottime', 'Tesla', 'Ugmonk', 'Museum', 'ScrollAnimation', 'Pluto the subs', 'Cactus illustration', 'SvetMir', 'Unity course work', 'TopOfRoof'];
  imagePathArray: Array<any>= ['assets/images/home/3.webp', 'assets/images/home/car.webp', 'assets/images/home/2.webp','assets/images/3.webp'  ,'assets/images/5.webp' , 'assets/images/4.webp'  , 'assets/images/home/cactus_copy.webp', 'assets/images/2.webp' , 'assets/images/7.webp', 'assets/images/6.webp'];
  linkArray: Array<any>= ['https://uraqwav.github.io/shotime', 'Tesla','Ugmonk', 'https://uraqwav.github.io/powertyuio/', 'https://uraqwav.github.io/web-experience/web/IronManScroll/', 'https://uraqwav.github.io/subs-manager/',  'https://uraqwav.github.io/assets/images/home/cactus_copy.webp', 'https://uraqwav.github.io/svetmir',  'https://uraqwav.github.io/web-experience/web/CourseWork/', 'https://uraqwav.github.io/top-of-roof/',];
 
  constructor() { 
    for (let index = 0; index < this.nameArray.length; index++) {
      let item = new Portfolio();
      item.name = this.nameArray[index];
      item.link = this.linkArray[index];
      item.imagePath = this.imagePathArray[index];
      this.items.push(item);
    }
  }

  ngOnInit(): void {
  }

}
