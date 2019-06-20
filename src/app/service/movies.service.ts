import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { Movie } from './../models/Movie';
import { TVshow } from './../models/TVshow';
import { Season } from './../models/Season';
import {  } from 'q';
//used this link to help add more functionality https://github.com/okode/movies-app

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
//https://image.tmdb.org/t/p/w185' + movie.poster_path for search movies
private readonly baseUrl = 'https://api.themoviedb.org/3';
private readonly params = {
  api_key: '2b6607a1821d69c9f939c776b3cdea08',
  language: 'en'
}

  constructor(private http: HttpClient) { }

//--------------------------------------------Movie Queries--------------------------------------------------
searchMovies(query: string) {
    return this.http.get(`${this.baseUrl}/search/movie${this.getParams({ query: query })}`)
      .pipe(map((result: any) => <Movie[]>result.results));
  }
getMovieDetails(id: number) {
    const append = '&append_to_response=credits';
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}${this.getParams()}${append}`);
  }
//fins similiar movies will be below the view of a movie
 findSimliarMovies(id: number) {
   return this.http.get(`${this.baseUrl}/movie/${id}/similar${this.getParams()}`).pipe(
     map((result: any) => <Movie[]>result.results));
 }
  //find movies set to release soon and be able to se trailers
 findUpcomingMovies(){
      return this.http.get(`${this.baseUrl}/movie/upcoming${this.getParams()}`).pipe(
     map((result: any) => <Movie[]>result.results));
 }
  //find theatre by location
 findInTheatres(){
      return this.http.get(`${this.baseUrl}/movie/now_playing${this.getParams()}`).pipe(
     map((result: any) => <Movie[]>result.results));
 }

     

  //---------------------------------------------TV Queries---------------------------------------------------------------
  
 searchTv(query: string) {
   return this.http.get(`${this.baseUrl}/search/tv{this.getParams({ query: query })}`)
      .pipe(map((result: any) => <TVshow[]>result.results));
  }
  
  getTvDetails(id: number){
    return this.http.get(`${this.baseUrl}/tv/${id}${this.getParams()}`).pipe(
       map((result: any) => <TVshow[]>result.results));
  }
  
  getSimilarTvShows(id: number){
    return this.http.get(`${this.baseUrl}/tv/${id}/similar${this.getParams()}`).pipe(
       map((result: any) => <TVshow[]>result.results));
  }
  
  getSeason(id: number, season_number: number) {
    return this.http.get(`${this.baseUrl}/tv/${id}/season/${season_number}${this.getParams()}`).pipe(
       map((result: any) => <Season[]>result.results));
  }
  
  getEpisode(id: number, season_number: number, episode_number){
    //Add model for Episode and edit season model return this.http.get<Season[episode](`${this.baseUrl}/tv/${id}/season/${season_number}/episode/${episode_number}${this.getParams()}`);
  }
  
  
  //-----------------------------------------------Miscellaneous-------------------------------------------
  
  //for uri-encoding of serach
  private getParams(params?: any) {
    const obj = { ...this.params, ...params };
    const str = [];
    for (const p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
    return '?' + str.join('&');
  }



}

