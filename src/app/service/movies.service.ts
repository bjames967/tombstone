import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { Movie } from './../models/Movie'
import {  } from 'q';
//used this link to help add more functionality https://github.com/okode/movies-app

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

private readonly baseUrl = 'https://api.themoviedb.org/3';
private readonly params = {
  api_key: '2b6607a1821d69c9f939c776b3cdea08',
  language: 'en'
}

  constructor(private http: HttpClient) { }


  searchMovies(query: string) {
    return this.http.get(`${this.baseUrl}/search/movie${this.getParams({ query: query })}`)
      .pipe(map((result: any) => <Movie[]>result.results));
  }
  //need to add TV model, actor model
  searchTv(query: string) {
    return this.http.get(`${this.baseUrl}/search/tv/${this.getParams({query: query})}`)
      .pipe(map((result: any) => <Movie[]>result.results));
  }
  
  getPopularTv(page: number) {
    return this.http.get(`${this.baseUrl}/tv/popular${this.getParams({query: query})}`)
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
 findInTheatres(region: string){
      return this.http.get(`${this.baseUrl}/movie/now_playing${this.getParams(region: region)}`).pipe(
     map((result: any) => <Movie[]>result.results));
 }
  
 
  
  
 
  
    
    
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

