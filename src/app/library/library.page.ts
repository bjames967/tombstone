import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../service/movies.service';
import { Movie } from './../models/Movie';
import { TVshow } from './../models/TVshow';
import { StorageService } from './../service/storage.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  
  
  
  constructor(private movieService: MoviesService,
              private storageService: StorageService) { }

   ngOnInit() {
    loadTombstones();
  }

  loadTombstones(){
    filterStorage();
  }
  
  removeFromWatchList(tv: Object){
    this.storageService.deleteFromTombstones(tv.id);
    filterStorage();
  }
  
  filterStorage(){
    let res = this.storageService.getAllTombstones();
    for (item in res){
      if (item.movie = true){
        this.movieList.push(item);
      }else{
        this.tvList.push(item);
      }
    } 
  }

}
