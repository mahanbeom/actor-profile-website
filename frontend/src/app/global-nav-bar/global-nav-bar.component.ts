import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-nav-bar',
  templateUrl: './global-nav-bar.component.html',
  styleUrls: ['./global-nav-bar.component.scss']
})
export class GlobalNavBarComponent implements OnInit {

  readonly url = "https://3stb21askl.execute-api.ap-northeast-2.amazonaws.com/dev/";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  moveToLink(url: string) {
    window.open(url, '_self');
  }

  private formHeaders(): HttpHeaders {
    const formHeader = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'withCredentials': 'true'
    });
    return formHeader;
  }

  apiTest() {
    const signInForm = {
      "email": "akgksqja@gamil.com",
      "password": "akgksqja1!"
    };

    this.http.post(this.url + "users/login", signInForm, {
      headers: this.formHeaders()
    }).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    })

    this.http.get(this.url).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
