import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../service/movies.service'
import { Movie } from './../models/Movie'
import { TVshow } from './../models/TVshow'
import { Actor } from './../models/Actor'
import { Router } from '@angular/router'
import { LoadingController, Content } from '@ionic/angular';
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
              private router: Router
              private loadController: LoadingController) { }

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

  onClear(event: any) {
    this.results = null;
  }

  getMovieDetail(id: number){
    this.router.navigate(['search-detail', id])
  }

  private performSearch(query: string) {
    let loader;
    if (!query || query.trim().length <= 0) { return; }
      switch (this.searchType) {
        case 'movies': this.performSearchMovies(query); break;   
        case 'tv': this.performSearchTv(query); break;     
      }
    const loadingView = { translucent: true, spinner: 'dots'};
    const load = await this.loadController.create(loadingView);
    load.present();
    loader.subscribe(res => {
      if(!this.results){
         this.results = [];
      }
      this.results = this.results.concat(res);
      load.dismiss();
    }, err => {
      this.results = [];
      load.dismiss();
    });
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

