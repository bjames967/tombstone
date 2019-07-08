import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'

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
  
}
const WATCH_LIST_KEYS = 'watch-list';
const TOMBSTONE_KEYS = 'tombstones';

export class StorageService {

  constructor(private storage: Storage) { }

  //Get All movies and shows in watch list
  getAllWatchList(): Promise<StorageUnit[]> {
    return this.storage.get(WATCH_LIST_KEYS);
  }
 
  //Get all movie and show tombstones
  getAllTombstones(): Promise<StorageUnit[]> {
    return this.storage.get(TOMBSTONE_KEYS);
  }
  
  //add movie to watchList
  addToWatchList(unit: StorageUnit): Promise<any> {
    return this.storage.get(WATCH_LIST_KEYS).then((list: StorageUnit[]) => {
      if(list) {
        list.push(unit);
        return this.storage.set(WATCH_LIST_KEYS, list);
      }else{
        return this.storage.set(WATCH_LIST_KEYS, [unit]); 
      }
    });
  }
  
  //add new unit to tombstones
  collectTombstone(unit: StorageUnit): Promise<any> {
    return this.storage.get(TOMBSTONE_KEYS).then((tombstones: StorageUnit[]) => {
      if(tombstones){
         tombstones.push(unit);
         return this.storage.set(TOMBSTONE_KEYS, tombstones);
      }else{
         return this.storage.set(TOMBSTONE_KEYS, [unit]);
      }
    });  
  }
  
  //delete a unit from watchlist
  deleteFromWatchList(id: number): Promise<StorageUnit> {
    return this.storage.get(WATCH_LIST_KEYS).then((list: StorageUnit[]) => {
      if(!list || list.length === 0){
        console.log('nothing to remove with ID: #{id}');
        return null;
      } 
      let newList = list.filter(obj => obj.id !== id);
      return this.storage.set(WATCH_LIST_KEYS, newList);
     });
  }
  
  deleteFromTombstones(id: number): Promise<StorageUnit> {
     return this.storage.get(TOMBSTONE_KEYS).then((list: StorageUnit[]) => {
      if(!list || list.length === 0){
        console.log('nothing to remove with ID: #{id}');
        return null;
      } 
      let newList = list.filter(obj => obj.id !== id);
      return this.storage.set(TOMBSTONE_KEYS, newList);
     });
  }
  
                                                 
  
 






