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
  results: StorageUnit[];
  
  constructor(private storageService: StorageService,
              private router: Router) {
  }
 
  ngOnInit() {
    console.log('on page')
    this.listType = 'movies';
    console.log(this.listType);
    this.onListChanged();
    
  }

  onListChanged(){
    this.results = null;
    this.pageSwap();
  }

  pageSwap(){
    switch(this.listType){
      case 'movies':
        console.log('movie');
        this.loadMovieWatchList(); break;
      case 'tv':
        console.log('tv');
        this.loadTvWatchList(); break;
      default:
    }
  }
 
  onMovieClick(id){
     this.router.navigate(['movie', id])
  }
  
  onTvClick(id){
     this.router.navigate(['tv', id])
  }

  loadMovieWatchList(){
    this.storageService.getMovieWatchList().then((list: StorageUnit[]) => {
      this.results = list; console.log(this.results);
    });
  }
  
  loadTvWatchList(){
     this.storageService.getTvWatchList().then((list: StorageUnit[]) => {
       this.results = list; console.log(this.results);
     });
  }
  
  removeShow(id: number){
    return this.storageService.deleteTvFromWatchList(id);
  }
  
  removeMovie(id: number){
    return this.storageService.deleteMovieFromWatchList(id);
  }
  
      
}
