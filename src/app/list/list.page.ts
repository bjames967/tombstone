import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';
import { Movie } from './../models/Movie';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
 
  movieList: StorageUnit[];
  tvList: StorageUnit[];
  
  constructor(private storageservice: StorageService) {
  }
 
  ngOnInit() {
    loadWatchList();
  }

  loadWatchList(){
    filterStorage();
  }
  
  removeFromWatchList(tv: Object){
    this.storageService.deleteFromWatchList(tv.id);
    filterStorage();
  }
  
  filterStorage(){
    let res = this.storageService.getAllWatchList();
    for (item in res){
      if (item.movie = true){
        this.movieList.push(item);
      }else{
        this.tvList.push(item);
      }
    } 
  }
    
}
