import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http'

import { HomeComponent } from './shared/component/home/home.component';
import { MainSliderComponent } from './shared/component/main-slider/main-slider.component';
import { MovieDetailsComponent } from './shared/component/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainSliderComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
