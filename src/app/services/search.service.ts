import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url = 'https://api.themoviedb.org/'
  apikey = '2b6607a1821d69c9f939c776b3cdea08'


  constructor(private http: HttpClient) { }


  searchData(title: string): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/550?api_key=2b6607a1821d69c9f939c776b3cdea08`).pipe(
      map(results => results['Search'])
    );
  }
}
