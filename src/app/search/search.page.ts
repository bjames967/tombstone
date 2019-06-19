import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../service/movies.service'
import { Movie } from './../models/Movie'
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})



export class SearchPage implements OnInit {
  
  searchType: 'movies';
  searchInput = '';
  results: Movie[];
  
  constructor(private movieservice: MoviesService ) { }

  ngOnInit() {}

  onInput(event: any) {
    this.performSearch(this.searchInput);
  }

  onSearchTypeChange() {
    this.results = null;
    this.performSearch(this.searchInput);
  }

  onClear(event: any) {
    this.results = null;
  }

  private performSearch(query: string) {
    if (!query || query.trim().length <= 0) { return; }
        this.performSearchMovies(query);
    }

    private performSearchMovies(query: string) {
      this.movieservice.searchMovies(query).subscribe(res => {
        this.results = res;
        console.log(this.results)
      });
  

  }
}

