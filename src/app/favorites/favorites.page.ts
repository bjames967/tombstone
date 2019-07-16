import { Component, OnInit } from '@angular/core';
import { StorageUnit } from './../models/StorageUnit'
import { MoviesService } from './../service/movies.service'
import { StorageService } from './../service/storage.service'
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  favoriteType: 'movies' | 'tv';
  results: StorageUnit[];
  editMode: boolean;
  
  constructor(private movieService: MoviesService,
              private storageService: StorageService,
              private router: Router,
              private popoverCtrl: PopoverController) { }

   ngOnInit() {
    this.favoriteType = 'movies';
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
    switch(this.favoriteType){
      case 'movies':
        this.loadMovieFavorites(); break;
      case 'tv':
        this.loadTvFavorites(); break;
      default:
    }
  }

  
  async openTombstoneOptionsModal(ev: any){
  }

  
  onMovieClick(id){
    this.router.navigate(['movie', id])
  }
  
  onTvClick(id){
    this.router.navigate(['tv', id]);
  }
  
  
  loadTvFavorites(){
    this.storageService.getTvFavorites().then((list: StorageUnit[]) => {
      this.results = list;
    });
  }
  
  loadMovieFavorites(){
    this.storageService.getMovieFavorites().then((list: StorageUnit[]) => {
      this.results = list;
    });
  }
  
  removeTvFavorite(id: number){
    this.storageService.deleteMovieFromFavorites(id);
    this.loadMovieFavorites();
  }
  
  removeMovieFavorite(id: number){
    this.storageService.deleteTvFromFavorites(id);
    this.loadTvFavorites();
  }
}
