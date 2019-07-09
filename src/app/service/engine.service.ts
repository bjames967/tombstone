import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SortingService } from 'sorting.service';
import { MoviesService } from 'Movies.service';
import { StorageService } form 'storage.service';
//used this link to help add more functionality https://github.com/okode/movies-app

@Injectable({
  providedIn: 'root'
})
const MEDIUM_RATING_LOWER_BOUND = 6;
const MEDIUM_RATING_UPPER_BOUND = 7;
const HIGH_RATING_UPPER_BOUND = 8;
const HIGH_RATING_UPPER_BOUND = 10;
export class EngineService {
  myMovieTombstones: StorageUnit[];
  myTvTombstones: StorageUnit[];
  commonGenreIds: number[];
  highRatedMovies: StorageUnit[];
  highRatedShows: StorageUnit[];
  mediumRatedMovies: StorageUnit[];
  mediumRatedShows: StorageUnit[];
  lowRatedMovies: StorageUnit[];
  lowRatedShows: StorageUnit[];
  
  highGrossingGenres:{id: number, name: string}[];
  mediumGrossingGenres:{id: number, name: string}[];
  lowGrossingGenres:{id: number, name: string}[];
  
  constructor(private movieService: MovieService,
              private sortingService: SortingService,
              private storageService: StorageService) { }
  
 
  
  
  
  seedRatingData(){
   this.mediumRatedMovies = this.myMovieTombstones.filter(function(x){
     x.user_rating >= MEDIUM_RATING_LOWER_BOUND && x.user_rating <= MEDIUM_RATING_UPPER_BOUND;
   });
   this.highRatedMovies = this.myMovieTombstones.filter(function(x){
     x.user_rating >= HIGH_RATING_LOWER_BOUND && x.user_rating <= HIGH_RATING_UPPER_BOUND;
   });
   this.lowRatedMovies = this.myMovieTombstones.filter(function(x){
     x.user_rating < MEDIUM_RATING_LOWER_BOUND;
   });
   this.mediumRatedShows = this.myTvTombstones.filter(function(x){
     x.user_rating <= MEDIUM_RATING_LOWER_BOUND && x.user_rating >= MEDIUM_RATING_UPPER_BOUND;
   });
   this.highRatedShows = this.myTvTombstones.filter(function(x){
     x.user_rating <= HIGH_RATING_LOWER_BOUND && x.user_rating >= HIGH_RATING_UPPER_BOUND;
   });
   this.lowRatedShows = this.myTvTombstones.filter(function(x){
     x.user_rating < MEDUM_RATING_LOWER_BOUND;
   });
  }

 gatherTombstoneData(){
   this.storageService.getTvTombstones().then((list: StorageUnit[]) => {
     this.myTvTombstones = list;
   });
   this.storageService.getMovieTombstones().then((list: StorageUnit[]) => {
     this.myMovieTombstones = list;
   });   
 }
  
  
 CollectMovieGenresFromRatings(){
   this.highGrossingGenres = this.findTopGenres(this.highRatedMovies);
   this.mediumGrossingGenres = this.findTopGenres(this.mediumRatedMovies);
   this.lowGrossingGenres = this.findTopGenres(this.lowRatedMovies);
 }
  
  
 
  
 findTopGenres(list: StorageUnit[]){
   //make a genre class to cross check and treat as a map, then pull back top 2 with most occurences
   for(item in list){
     for(genre in item.genre_ids){
      //make genres a BST to insert into with name, occurence, and id
     }
   }
      
 }
  
  
  
}
              
              
        
   
