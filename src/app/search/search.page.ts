import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../service/movies.service'
import { Movie } from './../models/Movie'
import { TVshow } from './../models/TVshow'
import { Actor } from './../models/Actor'
import { Router } from '@angular/router'
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})



export class SearchPage implements OnInit {
  
  searchType: 'movies' | 'tv' | 'person';
  searchInput = '';
  results: Movie[] | TVshow[] | Actor[];
  
  constructor(private movieservice: MoviesService, private router: Router ) { }

  ngOnInit() {}

  onInput(event: any) {
    console.log(this.searchInput)
    this.performSearch(this.searchInput);
  }

  onSearchTypeChange() {
    this.results = null;
    this.performSearch(this.searchInput);
  }

  onClear(event: any) {
    this.results = null;
  }

  getMovieDetail(id: number){
    this.router.navigate(['search-detail', id])
  }

  private performSearch(query: string) {
    if (!query || query.trim().length <= 0) { return; }
        switch (this.searchType) {

        case 'movies':
            this.performSearchMovies(query); break;   
        case 'tv':
          this.performSearchTv(query); break;
        case 'person':
          this.performSearchActor(query); break;
        default:
        }
    }

    private performSearchMovies(query: string) {
      this.movieservice.searchMovies(query).subscribe(res => {
        this.results = res;
        console.log(this.results)
      });
    }

    private performSearchTv(query: string) {
      this.movieservice.searchTv(query).subscribe(res => {
        this.results = res;
        console.log(this.results)
      })
    }

    private performSearchActor(query: string){
      this.movieservice.searchPerson(query).subscribe(res => {
        this.results = res;
        console.log(this.results)
      });
    }

}

