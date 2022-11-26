import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';

// material modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';


const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatTableModule,
];


const modules = [
  HttpClientModule,
  SwiperModule,
  ...materialModules
];

@NgModule({
  declarations: [

  ],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ],
  providers: [

  ]
})
export class SharedModule { }