import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { StorageService } from '../service/storage.service';
import { SortingService } from '../service/sorting.service';
import { StorageUnit } from './../models/StorageUnit';
import { PopoverController } from '@ionic/angular';
import { SortPagePage } from './../modals/sort-page/sort-page.page'


@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.page.html',
  styleUrls: ['./recommended.page.scss'],
})
export class RecommendedPage implements OnInit {
  TabType: 'TopGenreMovie' | 'TopGenreTv' | 'BecauseYouLikedMovie' | 'BecauseYouLikedShow';
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
    
  
  constructor(private movieService: MoviesService,
              private storageService: StorageService,
              private sortingService: SortingService,
              private popoverCtrl: PopoverController) { }

  ngOnInit() {
    
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

    

}
