import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared.module';
import { HomeComponent } from './home/home.component';
import { GlobalNavBarComponent } from './global-nav-bar/global-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GlobalNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
