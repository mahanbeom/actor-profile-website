import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-nav-bar',
  templateUrl: './global-nav-bar.component.html',
  styleUrls: ['./global-nav-bar.component.scss']
})
export class GlobalNavBarComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  moveToLink(url: string) {
    window.open(url, '_self');
  }

  apiTest() {
    const signInForm = {
      "email": "akgksqja@gamil.com",
      "password": "akgksqja1!"
    };

    this.http.get("https://3stb21askl.execute-api.ap-northeast-2.amazonaws.com/dev/").subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
