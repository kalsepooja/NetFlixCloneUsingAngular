import { Component, OnInit, inject } from '@angular/core';
import { MoviesService } from '../../service/movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TrandingMovies } from '../../model/movies';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<<', '>>'],
    responsive: {
      0: {
        items: 1
      },
      // 400: {
      //   items: 2
      // },
      // 740: {
      //   items: 3
      // },
      // 940: {
      //   items: 4
      // }
    },
    nav: true
  };

  movieArr : Array<TrandingMovies> = [];
  private _movieservice = inject(MoviesService)
  constructor() { }

  ngOnInit(): void {

    this._movieservice.fetchTrandingMovies()
      .subscribe(res => {
        console.log(res);
        this.movieArr = res;
      })
  }

}
