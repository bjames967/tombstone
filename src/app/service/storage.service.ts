import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'

})
export class StorageService {

  constructor(private storage: Storage) { }

  MovieIsTombstone(){

  }
  
  saveMovieToTombstone(){
    
  }

  removeMovieFromTombstone(){

  }

  movieisWatchlist(){
      return false; //for now
  }

  addMovieToWatchlist(movie: JSON){
      if (this.movieisWatchlist){
        this.storage.set('movie', movie);
        console.log('added movie to watchlist')
      }else{
        this.modalfailureAdded();
        console.log('failed adding movie')
      }
  }

  removeMovieFromWatchlist(){

  }

  //Tv show saving

  ShowIsTombstone(){

  }
  
  saveShowToTombstone(){
    
  }

  removeShowFromTombstone(){

  }

  ShowisWatchlist(){

  }

  addShowToWatchlist(){

  }

  removeShowFromWatchlist(){

  }

  modalMovieAdded(){

  }

  modalfailureAdded(){

  }


  getAllWatchList(){
    this.storage.get('movie');
  }






}
