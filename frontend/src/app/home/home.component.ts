import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  imgList: string[] = [];

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < 8; i ++) {
      this.imgList[i] = `../assets/images/photo${i+1}.jpg`;
    }
  }

}
