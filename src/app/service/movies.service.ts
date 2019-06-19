import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Movie } from './../models/Movie'
import {  } from 'q';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

private readonly baseUrl = 'https://api.themoviedb.org/3';
private readonly params = {
  api_key: '2b6607a1821d69c9f939c776b3cdea08',
  language: 'es-ES'
}

  constructor(private http: HttpClient) { }


  searchMovies(query: string) {
    return this.http.get(`${this.baseUrl}/search/movie${this.getParams({ query: query })}`)
      .pipe(map((res: any) => <Movie[]>res.results));
  }

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

