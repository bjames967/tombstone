import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';
import { Movie } from './../models/Movie';
import { Router } from '@angular/router';
import {StorageUnit } from './../models/StorageUnit';
import { PopoverController } from '@ionic/angular';
import { SortPagePage } from './../modals/sort-page/sort-page.page'

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  listType: 'movies' | 'tv';
  results: StorageUnit[];
  editMode: boolean;
  
  constructor(private storageService: StorageService,
              private router: Router,
              private popoverCtrl: PopoverController) {
  }
 
  ngOnInit() {
    this.editMode = false;
    this.listType = 'movies';
    this.onListChanged();
    
  }
  enterEditMode(){
    this.editMode = true;
    this.onListChanged();
  }
  
  exitEditMode(){
    this.editMode = false;
    this.onListChanged();
  }


  async openSortingModal(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: SortPagePage,
      event: ev,
      translucent: true,
      showBackdrop: true,
      animated: true
    });
    return await popover.present();
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
    this.storageService.deleteTvFromWatchList(id);
    this.onListChanged();
  }
  
  removeMovie(id: number){
    this.storageService.deleteMovieFromWatchList(id);
    this.onListChanged();
  }
  
      
}
