import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';
import { Movie} from './../models/Movie'

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
 
  constructor(private storageservice: StorageService) {
  }
  Movies: Movie[];

  ngOnInit() {
    this.loadWatchList();
  }


  loadWatchList(){
      this.storageservice.getAllWatchList();
      console.log('loaded')
  }
}
