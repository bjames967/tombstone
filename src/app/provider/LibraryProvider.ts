import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
//run the command 'ionic cordova plugin add cordova-sqlite --save'
//add imports to app.module.ts
//import {LibraryProvider} from './../provider/LibraryProvider';
//import { IonicStorageModule } from '@ionic/storage'; and in the providers array below
//image path to get images------


image_base_url = 'https://image.tmdb.org/t/p/w500/';
image_file: string = ''; //item.poster_path
const STORAGE_KEY = 'savedFilms';
@Injectable()
export class LibraryProvider {

  constructor(public storage: Storage){}
  
  #get all movies 
  getAll(){
    return this.storage.get(STORAGE_KEY);
  }
  
  addToLibrary(imdbId){
    return this.getAll().then(result => {
      if(result) {
        result.push(imdbId);
        return this.storage.set(STORAGE_KEY, result);
      }else{
         return this.storage.set(STORAGE_KEY, [imdbId]);
        }
     });
   }
  
  
  #check to see if we have saved the imdb ID
  inLibrary(imdbId){
    return this.getAll().then(result => {
      return result && result.indexOf(imdbId) !== -1;
    });


}

