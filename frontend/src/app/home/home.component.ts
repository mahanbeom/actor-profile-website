import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import SwiperCore, { Navigation, EffectCoverflow, Pagination, Mousewheel } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, EffectCoverflow, Pagination, Mousewheel]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  imgList: string[] = [];
  readonly infoList = [
    "- 나이 : 1996년생",
    "- 키 / 체중 : 179cm / 80kg",
    "- 특기 : 수영, 노래, 검도",
    "- Email : rlatmdqn1234@naver.com",
    "- Phone : 010-8784-1738"
  ];

  readonly dramaList = [
    "- [법쩐] 성태 패거리 역 (방영 예정)",
    "- [금혼령] 산적역 (방영 예정)"
  ];

  readonly movieList = [
    "- [완두코니아] 주연",
    "- [그것] 주연",
    "- [연기] 주조연",
    "- [the moment] 조연",
    "- [3월 22일] 주연",
    "- [피아노] 주연"
  ];

  mobileScreen: boolean = true;

  resizeObservable: Observable<Event> | null = null;
	resizeSubscription: Subscription | null = null;

  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth > 800) {
      this.mobileScreen = false;
		}

    /* 창 크기를 추적하여 800px 이상의 창크기에서는 웹 스크린,
		  이하는 모바일 스크린이 보이도록 설정. */
		this.resizeObservable = fromEvent(window, 'resize');
		this.resizeSubscription = this.resizeObservable.subscribe( () => {
			if(window.innerWidth > 800) {
       this.mobileScreen = false;
			} else {
        this.mobileScreen = true;
			}
		});

    for(let i = 0; i < 8; i ++) {
      this.imgList[i] = `../assets/images/photo_${i+1}.jpg`;
    }
  }

}
