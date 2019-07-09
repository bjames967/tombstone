import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SortingService } from 'sorting.service';
import { MoviesService } from 'Movies.service';
import { StorageService } form 'storage.service';
//used this link to help add more functionality https://github.com/okode/movies-app

@Injectable({
  providedIn: 'root'
})
export class EngineService {
  myMovieTombstones: StorageUnit[];
  myTvTombstones: StorageUnit[];
  
  
  constructor(private movieService: MovieService,
              private sortingService: SortingService,
              private storageService: StorageService) { }
              
              
         
}
  
  GatherTombstoneData(){
  
  }
   
