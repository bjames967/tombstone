import { Component } from '@angular/core';
import { Movie } from './../models/Movie'
import { TVshow } from './../models/TVshow'
import { MoviesService} from './../service/movies.service'
import { ShowdetailsPage } from '../showdetails/showdetails.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  trendingType: 'Movies' | 'TVshows'
  results: Movie[] | TVshow[];

  constructor(private movieService: MoviesService) {}
  

  ngOnInit(){
    if(this.trendingType === 'Movies'){
    this.findTrendingMovies().subscribe(res => {
      this.results = res; console.log(res);
    });
  }else{
    this.findTrendingShows().subscribe(res =>{
      this.results = res;console.log(res);
    });
  }
  }

  onTrendingTypeChange(){
    console.log('hit function')
    this.results = null;

    this.findTrendingAll();
    console.log('changed')
    
  }

  findTrendingAll(){
    switch(this.trendingType) {
      case 'Movies':
        this.findTrendingMovies().subscribe(res => {
          this.results = res; console.log(this.results);
        }); break;
      case 'TVshows':
        this.findTrendingShows().subscribe(res => {
          this.results = res; console.log(this.results); 
        }); break;
        default:
    }
  }
 
  findTrendingMovies(){
     return this.movieService.getTrendingMovies();
  }
  
  findTrendingShows(){
    return this.movieService.getTrendingShows();
  }
}

