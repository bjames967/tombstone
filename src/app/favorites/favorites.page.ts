import { Component, OnInit } from '@angular/core';

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
        this.loadMovieFavorites(); break;
      case 'tv':
        this.loadTvFavorites(); break;
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
  
  
  loadTvFavorites(){
    this.storageService.getFavorites().then((list: StorageUnit[]) => {
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
