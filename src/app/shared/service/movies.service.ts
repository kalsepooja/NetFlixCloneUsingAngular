import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TrandingMovieRes, TrandingMovies } from '../model/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  BASE_URL : string = environment.baseUrl;
  API_KEY : string = environment.apiKey;
  TRANDING_URL : string = `${this.BASE_URL}/trending/movie/week?api_key=${this.API_KEY}`
  private _http = inject(HttpClient);
  constructor() { }

  fetchTrandingMovies() : Observable<Array<TrandingMovies>> {
   return this._http.get<TrandingMovieRes>(this.TRANDING_URL)
    .pipe(
      map(res => res.results)
    )
  }

  fetchMovieInfo(id:string):Observable<any>{
    let movieUrl = `${this.BASE_URL}/movie/${id}?api_key=${this.API_KEY}`;
    return this._http.get<any>(movieUrl)
    // console.log(movieUrl);
  };

  fetchMovieCrewInfo(id:string, limit: number, memberType:string):Observable<any>{
    let movieUrl = `${this.BASE_URL}/movie/${id}/credits?api_key=${this.API_KEY}`;
    return this._http.get<any>(movieUrl)
        .pipe(
          map(res => {
            return res[memberType].slice(0, limit)
          })
        )
  }


}
