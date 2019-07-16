import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../service/movies.service';
import { Movie } from './../models/Movie';
import { TVshow } from './../models/TVshow';
import { StorageService } from './../service/storage.service';
import { Router } from '@angular/router';
import { StorageUnit } from './../models/StorageUnit';
import { PopoverController } from '@ionic/angular';
import { SortPagePage } from './../modals/sort-page/sort-page.page';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  stoneType: 'movies' | 'tv';
  results: StorageUnit[];
  editMode: boolean;
  
  constructor(private movieService: MoviesService,
              private storageService: StorageService,
              private router: Router,
              private popoverCtrl: PopoverController) { }

   ngOnInit() {
    this.stoneType = 'movies';
    this.onStoneChanged();

  }
  
  enterEditMode(){
    this.editMode = true;
    this.onStoneChanged();
  }
  
  exitEditMode(){
    this.editMode = false;
    this.onStoneChanged();
  }

  onStoneChanged(){
    this.results = null;
    this.pageSwap();
  }

  pageSwap(){
    switch(this.stoneType){
      case 'movies':
        this.loadMovieTombstones(); break;
      case 'tv':
        this.loadTvTombstones(); break;
      default:
    }
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
  
  async openTombstoneOptionsModal(ev: any){
  }

  
  onMovieClick(id){
    this.router.navigate(['movie', id])
  }
  
  onTvClick(id){
    this.router.navigate(['tv', id]);
  }
  
  
  loadTvTombstones(){
    this.storageService.getTvTombstones().then((list: StorageUnit[]) => {
      this.results = list;
    });
  }
  
  loadMovieTombstones(){
    this.storageService.getMovieTombstones().then((list: StorageUnit[]) => {
      this.results = list;
    });
  }
  
  removeTvTombstone(id: number){
    this.storageService.deleteTvFromTombstones(id);
    
  }
  
  removeMovieTombstone(id: number){
    this.storageService.deleteMovieFromTombstones(id);
    
  }
    
    
    
    
    
    
    
    

  

}
