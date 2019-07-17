import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { Movie } from './../models/Movie';
import { TVshow } from './../models/TVshow';
import { StorageUnit } from './../models/StorageUnit'
import { TVdetails } from '../models/TVdetails';

const TV_WATCH_LIST_KEYS = 'tv_watch_list';
const TV_TOMBSTONE_KEYS = 'tv_tombstones';

const MOVIE_WATCH_LIST_KEYS = 'movie_watch_list';
const MOVIE_TOMBSTONE_KEYS = 'movie_tombstones';

const MOVIE_FAVORITES = 'Favorite_movies';
const TV_FAVORITES = 'Favorite_shows';
const HIGH_GENRES = 'liked_genres';



@Injectable({
  providedIn: 'root'
})
export class StorageService {
  tombstoneSize: number;

  
  constructor(private storage: Storage) { }
  


  getTvFavorites(): Promise<StorageUnit[]>{
    return this.storage.get(TV_FAVORITES);
  }
  
  getMovieFavorites(): Promise<StorageUnit[]>{
    return this.storage.get(MOVIE_FAVORITES);
  }

  
  //assuming it is added to tombstones first
  addTvFavorite(unit: StorageUnit): Promise<any>{
      return this.storage.get(TV_FAVORITES).then((list: StorageUnit[]) => {
        if(list) {
          list.push(unit);
          console.log(list);
          return this.storage.set(TV_FAVORITES, list);
        }else{
          return this.storage.set(TV_FAVORITES, [unit]); 
        }
      });
  }
  //assuming it is added to tombstones first
  addMovieFavorite(unit: StorageUnit): Promise<any>{
        return this.storage.get(MOVIE_FAVORITES).then((list: StorageUnit[]) => {
          if(list) {
            list.push(unit);
            console.log(list);
            return this.storage.set(MOVIE_FAVORITES, list);
          }else{
            return this.storage.set(MOVIE_FAVORITES, [unit]); 
          }
        });
  }
  deleteMovieFromFavorites(id: number): Promise<StorageUnit>{
    return this.storage.get(MOVIE_FAVORITES).then((list: StorageUnit[]) => {
      if(!list || list.length === 0){
        console.log('nothing to remove with ID: #{id}');
        return null;
      } 
      let newList = list.filter(obj => obj.id !== id);
      return this.storage.set(MOVIE_FAVORITES, newList);
     });
  }
  
  deleteTvFromFavorites(id: number): Promise<StorageUnit>{
    return this.storage.get(TV_FAVORITES).then((list: StorageUnit[]) => {
      if(!list || list.length === 0){
        console.log('nothing to remove with ID: #{id}');
        return null;
      } 
      let newList = list.filter(obj => obj.id !== id);
      return this.storage.set(TV_FAVORITES, newList);
     });
  }
  
  getGenres(): Promise<number[]> {
    return this.storage.get(HIGH_GENRES);
  }
  
  addGenre(id: number): Promise<any> {
     return this.storage.get(HIGH_GENRES).then((list: number[]) => {
        if(list) {
          list.push(id);
          console.log(list);
          return this.storage.set(HIGH_GENRES, list);
        }else{
          return this.storage.set(HIGH_GENRES, [id]); 
        }
      });
  }
  
  deleteGenre(id: number){
    return this.storage.get(HIGH_GENRES).then((list: number[]) => {
      if(!list || list.length === 0){
        console.log('nothing to remove with ID: #{id}');
        return null;
      } 
      let newList = list.filter(obj => obj !== id);
      return this.storage.set(HIGH_GENRES, newList);
     });
  }
  
  getTvWatchList(): Promise<StorageUnit[]> {
    return this.storage.get(TV_WATCH_LIST_KEYS);
  }
 
  getTvTombstones(): Promise<StorageUnit[]> {
    return this.storage.get(TV_TOMBSTONE_KEYS);
  }
  
    
  getMovieWatchList(): Promise<StorageUnit[]> {
    return this.storage.get(MOVIE_WATCH_LIST_KEYS);
  }
 
  getMovieTombstones(): Promise<StorageUnit[]> {
    return this.storage.get(MOVIE_TOMBSTONE_KEYS);
  }
  
  //add movie to watchList
  addToMovieWatchList(unit: StorageUnit): Promise<any> {
      return this.storage.get(MOVIE_WATCH_LIST_KEYS).then((list: StorageUnit[]) => {
        if(list) {
          list.push(unit);
          console.log(list);
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
          console.log(list);
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
          console.log(tombstones);
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
          console.log(tombstones);
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
    console.log('deleting Movie')
     return this.storage.get(MOVIE_TOMBSTONE_KEYS).then((list: StorageUnit[]) => {
      if(!list || list.length === 0){
        console.log('nothing to remove with ID: #{id}');
        return null;
      } 
      let newList = list.filter(obj => obj.id !== id);
      console.log(newList)
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
    console.log('deleting tv tombstone')
     return this.storage.get(TV_TOMBSTONE_KEYS).then((list: StorageUnit[]) => {
      if(!list || list.length === 0){
        console.log('nothing to remove with ID: #{id}');
        return null;
      } 
      let newList = list.filter(obj => obj.id !== id);
      console.log(newList);
      return this.storage.set(TV_TOMBSTONE_KEYS, newList);
     });
  }
  
  
  mapMovieToStorageUnit(movie: Movie, rating: number){
    let unit: StorageUnit = {
      title: movie.title,
      poster_path: movie.poster_path,
      id: movie.id,
      overview: movie.overview,
      avg_rating: movie.vote_average,
      genre_ids: null,
      backdrop_path: null,
      release_date: movie.release_date,
      user_rating: rating,
      runtime: movie.runtime
    };
    return unit;
  }
      
  mapTvToStorageUnit(tv: TVdetails, rating: number){ 
    let unit: StorageUnit = {
    title: tv.name,
    poster_path: tv.poster_path,
    id: tv.id,
    overview: tv.overview,
    avg_rating: tv.vote_average,
    genre_ids: null,
    backdrop_path: null,
    release_date: tv.first_air_date,
    user_rating: rating,
    runtime: tv.episode_run_time[0]
  };
  return unit;
}

  
}                                                 
  
 






