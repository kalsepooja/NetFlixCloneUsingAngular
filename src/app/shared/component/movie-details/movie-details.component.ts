import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../service/movies.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieId !: string;
  movieObj !: any;
  backgroundImg !: string;
  castArr !: any;
  private _auth = inject(ActivatedRoute);
  private _movieService = inject(MoviesService);

  constructor() { }

  ngOnInit(): void {
    this.movieId = this._auth.snapshot.params['movieId'];
    // console.log(this.movieId);
    this._movieService.fetchMovieInfo(this.movieId)
      .subscribe(res => {
        console.log(res);
        this.movieObj = res;
        this.backgroundImg = `https://image.tmdb.org/t/p/original/`+this.movieObj?.backdrop_path;

      })
    this._movieService.fetchMovieCrewInfo(this.movieId, 4, 'cast')  
      .subscribe(res => {
        console.log(res);
        
      })
    
  };

  getgeners(arr: any){
    return arr.map((ele:any) => ele.name).join(", ")
  }

}
