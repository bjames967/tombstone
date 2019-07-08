import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { StorageService } from '../service/storage.service';


@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.page.html',
  styleUrls: ['./recommended.page.scss'],
})
export class RecommendedPage implements OnInit {
  current_tombstones: StorageUnit[];
  movie_list: StorageUnit[];
//   genres: [{id: 28, name: "Action"},
//            {id: 12, name: "Adventure"},
//            {id: 16, name: "Animation"},
//            {id: 35, name: "Comedy"},
//            {id: 80, name: "Crime"},
//            {id: 99, name: "Documentary"},
//            {id: 18, name: "Drama"},
//            {id: 10751, name: "Family"},
//            {id: 14, name: "Fantasy"},
//            {id: 36, name: "History"},
//            {id: 27, name: "Horror"},
//            {id: 10402, name: "Music"},
//            {id: 9648, name: "Mystery"},
//            {id: 10749, name: "Romance"},
//            {id: 878, name: "Science Fiction"},
//            {id: 10770, name: "TV Movie"},
//            {id: 53, name: "Thriller"},
//            {id: 10752, name: "War"},
//            {id: 37, name: "Western"}];
    
  
  constructor(private movieService: MovieService,
              private stroageService: StorageService) { }

  ngOnInit() {
  }
 
  
  
  gatherStoredData(){
    this.storageService.getAllTombstones().subscribe(res => {
      this.current_tombstones = res;
    });
  }
    
 
  

}
