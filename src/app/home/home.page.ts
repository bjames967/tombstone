import { Component } from '@angular/core';
import { Movie } from './../models/Movie'
import { TVshow } from './../models/TVshow'
import { MoviesService} from './../service/movies.service'
import { ShowdetailsPage } from '../showdetails/showdetails.page';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Genres } from './../models/Genres';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  trendingType: 'TrendingMovies' | 'TrendingTVshows' | 'Theatres' | 'ComingSoon';
  results: Movie[] | TVshow[];

  constructor(private movieService: MoviesService,
              private router: Router,
              private loadingCtrl: LoadingController) {}
  

  ngOnInit(){
    this.trendingType = 'TrendingMovies';
    this.onTrendingTypeChange();
  }
  
  async loadingPause(){
   let load = await this.loadingCtrl.create({
      duration: 200000
   });
  }

  onMovieClick(id){
      this.router.navigate(['movie', id])
  }

  onTvClick(id){
      this.router.navigate(['tv', id])
  }

  onTrendingTypeChange(){
    console.log('hit function')
    this.results = null;

    this.pageSwap();
    console.log('changed')
  }
  
  pageSwap(){
    this.loadingPause();
    switch (this.trendingType) {
      
      case 'TrendingMovies':
        this.findTrendingMovies(); break;
      
      case 'TrendingTVshows':
        this.findTrendingShows(); break;
        
      case 'Theatres':
        this.findMoviesInTheatres(); break;
        
      case 'ComingSoon':
        this.findUpcomingMovies(); break;
        
      default:
    }
    
  }
    
 
  private findTrendingMovies(){
this.movieService.getTrendingMovies().subscribe(res => {
     this.results = res;
     console.log(this.results);
   });  }
  
  private findTrendingShows(){
   this.movieService.getTrendingShows().subscribe(res => {
     this.results = res;
     console.log(this.results);
   });
  }
  
  private findMoviesInTheatres(){
   this.movieService.findInTheatres().subscribe(res => {
     this.results = res;
     console.log(this.results);
   });
  }
  
  private findUpcomingMovies(){
   this.movieService.findUpcomingMovies().subscribe(res => {
     this.results = res;
     console.log(this.results);
   });
  }
  
  private SearchMovieByGenre(id: number){
    this.movieService.getMovieByGenres(id).subscribe(res => {
      this.results = res;
      console.log(this.results);
    });
  }
  
  private SearchTvByGenre(id: number){
    this.movieService.getShowByGenres(id).subscribe(res => {
      this.results = res;
      console.log(this.results);
    });
  }
  
}
