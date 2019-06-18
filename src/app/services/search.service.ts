import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = 'https://api.themoviedb.org/3/';
  apikey = '2b6607a1821d69c9f939c776b3cdea08';

  image_base_url = 'https://image.tmdb.org/t/p/w500/';
  image_file: string = ''; //item.poster_path


  constructor(private http: HttpClient) { }


  searchData(title: string): Observable<any> {
    return ///this.http.get(`${url}/3/movie/550?api_key=${apikey}&query=${title}').pipe(
      //map(results => results['Search'])
    //);
  }
  getDetails(id){
  }
}
