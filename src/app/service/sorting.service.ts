import { Injectable } from '@angular/core';
import { Movie } from './../models/Movie';
import { TVshow } from './../models/TVshow';
import { StorageUnit } from './../models/StorageUnit'
import { TVdetails } from '../models/TVdetails';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class SortingService {


  
  constructor(private storageService: StorageService){}
  
  //sorted in aplhabetical order
  sortByName(savedMovies: StorageUnit[]){
    
    
  }
  //This rating is from the API, not the rating they made
  sortByRating(savedMovies: StorageUnit[]){
    
  }
  //for tombstones only as watchlist isn't giving a rating by the user
  sortByPersonalRating(savedMovies: StorageUnit[]){
    
  }
  //either runtime of movie or episode length
  sortByRunTime(savedMovies: StorageUnit[]){
    
  }
  //sort by when movie/show was released by newest dates to oldest dates
  sortByReleaseDate(savedMovies: StorageUnit[]){
    
  }
  //sort by when the user added the unit to their tombstone library
  sortBySavedDate(savedMovies: StorageUnit[]){
    
  } 
}
