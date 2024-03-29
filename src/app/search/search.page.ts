import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesService } from './../service/movies.service'
import { Movie } from './../models/Movie'
import { TVshow } from './../models/TVshow'
import { Actor } from './../models/Actor'
import { Router } from '@angular/router'
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})



export class SearchPage implements OnInit {
  
  searchType: 'movies' | 'tv' | 'person';
  searchInput = '';
  results: Movie[] | TVshow[] | Actor[];
  
  constructor(private movieservice: MoviesService, 
              private router: Router,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.searchType = 'movies';
  }
  
  onMovieClick(id){
    this.router.navigate(['movie', id])
  }

  onTvClick(id){
    this.router.navigate(['tv', id])
  }
  onInput(event: any) {
    console.log(this.searchInput)
    this.performSearch(this.searchInput);
  }

  onSearchTypeChange() {
    this.results = null;
    this.performSearch(this.searchInput);
  }
  
  async loadingDisplay(){
   let load = await this.loadingCtrl.create({
      spinner: 'dots',
      duration: 200000
   });
    
  }

  onClear(event: any) {
    this.results = null;
  }

  getMovieDetail(id: number){
    this.router.navigate(['search-detail', id])
  }

  private async performSearch(query: string) {
    let loader;
    this.loadingDisplay();
    if (!query || query.trim().length <= 0) { return; }
      switch (this.searchType) {
        case 'movies': this.performSearchMovies(query); break;   
        case 'tv': this.performSearchTv(query); break;     
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
      });
    }
}

