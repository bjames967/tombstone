import { Injectable } from '@angular/core';
import { Movie } from './../models/Movie';
import { TVshow } from './../models/TVshow';
import { StorageUnit } from './../models/StorageUnit'
import { TVdetails } from '../models/TVdetails';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class SortingService {


  
  constructor(private storageService: StorageService){}
  
  //sorted in aplhabetical order
  sortByName(savedMovies: StorageUnit[]){
    savedMovies.sort(function(a,b){
      if(a.title < b.title){ return -1;}
      if(a.title > b.title){ return 1;}
      return 0;
    });
    return savedMovies;
      
  }
  //This rating is from the API, not the rating they made
  sortByRating(savedMovies: StorageUnit[]){
    savedMovies.sort((a,b) => b.avg_rating - a.avg_rating);
    return savedMovies;
  }
  //for tombstones only as watchlist isn't giving a rating by the user
  sortByPersonalRating(savedMovies: StorageUnit[]){
    savedMovies.sort((a,b) => b.user_rating - a.user_rating);
    return savedMovies;
  }
  //either runtime of movie or episode length
  sortByRunTime(savedMovies: StorageUnit[]){
    savedMovies.sort((a,b) => b.runtime - a.runtime);
    return savedMovies;
  }
           
                     
  //sort by when movie/show was released by newest dates to oldest dates
  sortByReleaseDate(savedMovies: StorageUnit[]){
    //TODO
  }
  //sort by when the user added the unit to their tombstone library
  sortBySavedDate(savedMovies: StorageUnit[]){
    //TODO
  } 
  //this wil require a data structure of some sort
  sortByMovieGenre(savedMovies: StorageUnit[]){
    //TODO
  }
  
}
