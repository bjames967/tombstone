import { Injectable } from '@angular/core';
//run the command 'ionic cordova plugin add cordova-sqlite --save'
//add imports to app.module.ts
//import {LibraryProvider} from './../provider/LibraryProvider';
//import { IonicStorageModule } from '@ionic/storage'; and in the providers array below
//image path to get images------

const STORAGE_KEY = 'savedID';
@Injectable()
export class LibraryProvider {
  
  constructor(public storage: Storage){}
  
  //get all movies 
  getAll(){
    return this.storage.get(STORAGE_KEY);
  }
  
  addToLibrary(imdbId){
    return this.getAll().then(result => {
      if(result) {
        console.log('added to library with ID:', imdbId)
        result.push(imdbId);
        return this.storage.set(STORAGE_KEY, result);
      }else{
         return this.storage.set(STORAGE_KEY, [imdbId]);
        }
     });
   }
  
  //check to see if we have saved the imdb ID
  inLibrary(imdbId){
    console.log('in library method running...')
    return this.getAll().then(result => {
      return result && result.indexOf(imdbId) !== -1;
    });
  }
  //remove movie from library
  removeFromLibrary(imdbId){
    console.log('Removing movie from library', imdbId)
    return this.getAll().then( result => {
      if(result){
        var position = result.indexOf(imdbId);
        result.splice(position, 1);
        return this.storage.set(STORAGE_KEY, result)
      }
    });
  }


}

