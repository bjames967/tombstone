import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';
import { Movie } from './../models/Movie';
import { Router } from '@angular/router';
import {StorageUnit } from './../models/StorageUnit';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  listType: 'movies' | 'tv';
  movieList: StorageUnit[];
  tvList: StorageUnit[];
  results: StorageUnit[];
  
  constructor(private storageService: StorageService,
              private router: Router) {
  }
 
  ngOnInit() {
    this.listType = 'movies';
    this.loadWatchList();
    console.log(this.listType, this.tvList);
    this.onlistChanged();
    
  }

  onlistChanged(){
    this.listType = null;
    switch(this.listType){
      case 'movies':
        console.log('movie');
        this.results = this.movieList; break;
      case 'tv':
        console.log('tv');
        this.results = this.tvList; break;
        default:
    }
  }
 
  onMovieClick(id){
     this.router.navigate(['movie', id])
  }
  
  onTvClick(id){
     this.router.navigate(['tv', id])
  }
  

  loadWatchList(){
   this.loadMovieWatchList();
   this.loadTvWatchList();
  }
  loadMovieWatchList(){
    this.storageService.getMovieWatchList().then((list: StorageUnit[]) => {
      this.movieList = list; console.log(this.movieList);
    });
  }
  
  loadTvWatchList(){
     this.storageService.getTvWatchList().then((list: StorageUnit[]) => {
       this.tvList = list; console.log(this.tvList);
     });
  }
  
  removeShow(id: number){
    return this.storageService.deleteTvFromWatchList(id);
  }
  
  removeMovie(id: number){
    return this.storageService.deleteMovieFromWatchList(id);
  }
  
      
}
