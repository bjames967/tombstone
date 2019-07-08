import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { Movie } from './../models/Movie';

@Injectable({
  providedIn: 'root'

})

export interface StorageUnit {
  title: string;
  poster_path: string;
  id: number;
  overview: string;
  movie: boolean;
  avg_rating: number;
  genre_ids: number[];
  backdrop_path: string;
  release_date: string;
}

const TV_WATCH_LIST_KEYS = 'tv_watch-list';
const TV_TOMBSTONE_KEYS = 'tv_tombstones';

const MOVIE_WATCH_LIST_KEYS = 'movie_watch-list';
const MOVIE_TOMBSTONE_KEYS = 'movie_tombstones';

export class StorageService {

  constructor(private storage: Storage) { }

  
  getTvWatchList(): Promise<StorageUnit[]> {
    return this.storage.get(TV_WATCH_LIST_KEYS);
  }
 
  getTvTombstones(): Promise<StorageUnit[]> {
    return this.storage.get(TV_TOMBSTONE_KEYS);
  }
  
    
  getMovieWatchList(): Promise<StorageUnit[]> {
    return this.storage.get(TV_WATCH_LIST_KEYS);
  }
 
  getMovieTombstones(): Promise<StorageUnit[]> {
    return this.storage.get(TV_TOMBSTONE_KEYS);
  }
  
  //add movie to watchList
  addToMovieWatchList(unit: StorageUnit): Promise<any> {
    return this.storage.get(MOVIE_WATCH_LIST_KEYS).then((list: StorageUnit[]) => {
      if(list) {
        list.push(unit);
        return this.storage.set(MOVIE_WATCH_LIST_KEYS, list);
      }else{
        return this.storage.set(MOVIE_WATCH_LIST_KEYS, [unit]); 
      }
    });
  }
  
  //add movie to watchList
  addToTvWatchList(unit: StorageUnit): Promise<any> {
    return this.storage.get(TV_WATCH_LIST_KEYS).then((list: StorageUnit[]) => {
      if(list) {
        list.push(unit);
        return this.storage.set(TV_WATCH_LIST_KEYS, list);
      }else{
        return this.storage.set(TV_WATCH_LIST_KEYS, [unit]); 
      }
    });
  }
  
  //add new movie to tombstones
  collectMovieTombstone(unit: StorageUnit): Promise<any> {
    return this.storage.get(MOVIE_TOMBSTONE_KEYS).then((tombstones: StorageUnit[]) => {
      if(tombstones){
         tombstones.push(unit);
         return this.storage.set(MOVIE_TOMBSTONE_KEYS, tombstones);
      }else{
         return this.storage.set(MOVIE_TOMBSTONE_KEYS, [unit]);
      }
    });  
  }
  
  //add new show to tombstones
  collectTvTombstone(unit: StorageUnit): Promise<any> {
    return this.storage.get(TV_TOMBSTONE_KEYS).then((tombstones: StorageUnit[]) => {
      if(tombstones){
         tombstones.push(unit);
         return this.storage.set(TV_TOMBSTONE_KEYS, tombstones);
      }else{
         return this.storage.set(TV_TOMBSTONE_KEYS, [unit]);
      }
    });  
  }
  
  //delete a unit from watchlist
  deleteMovieFromWatchList(id: number): Promise<StorageUnit> {
    return this.storage.get(MOVIE_WATCH_LIST_KEYS).then((list: StorageUnit[]) => {
      if(!list || list.length === 0){
        console.log('nothing to remove with ID: #{id}');
        return null;
      } 
      let newList = list.filter(obj => obj.id !== id);
      return this.storage.set(MOVIE_WATCH_LIST_KEYS, newList);
     });
  }
  
  deleteMovieFromTombstones(id: number): Promise<StorageUnit> {
     return this.storage.get(MOVIE_TOMBSTONE_KEYS).then((list: StorageUnit[]) => {
      if(!list || list.length === 0){
        console.log('nothing to remove with ID: #{id}');
        return null;
      } 
      let newList = list.filter(obj => obj.id !== id);
      return this.storage.set(MOVIE_TOMBSTONE_KEYS, newList);
     });
  }
  
   deleteTvFromWatchList(id: number): Promise<StorageUnit> {
    return this.storage.get(TV_WATCH_LIST_KEYS).then((list: StorageUnit[]) => {
      if(!list || list.length === 0){
        console.log('nothing to remove with ID: #{id}');
        return null;
      } 
      let newList = list.filter(obj => obj.id !== id);
      return this.storage.set(TV_WATCH_LIST_KEYS, newList);
     });
  }
  
  deleteTvFromTombstones(id: number): Promise<StorageUnit> {
     return this.storage.get(TV_TOMBSTONE_KEYS).then((list: StorageUnit[]) => {
      if(!list || list.length === 0){
        console.log('nothing to remove with ID: #{id}');
        return null;
      } 
      let newList = list.filter(obj => obj.id !== id);
      return this.storage.set(TV_TOMBSTONE_KEYS, newList);
     });
  }
  
  
  
  
  
  
  mapMovieToStorageUnit(movie: Movie){
    let unit: StorageUnit = {};
    unit.title = movie.title;
    unit.poster_path = movie.poster_path;
    unit.id = movie.id;
    unit.overview = movie.overview
    unit.avg_rating = movie.vote_average;
    unit.genre_ids = movie.genre_ids;
    unit.backdrop_path = movie.backdrop_path;
    unit.release_date = movie.release_date;
  }
      
  
                                                 
  
 






