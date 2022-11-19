import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'KimSeungBoo';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon('youtube',
    this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/youtube.svg'));
    this.matIconRegistry.addSvgIcon('instagram',
    this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg'));
  }
}
