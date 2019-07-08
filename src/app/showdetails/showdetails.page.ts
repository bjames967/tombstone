import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TVdetails } from '../models/TVdetails';
import { TVshow } from '../models/TVshow';
import { Season } from '../models/Season';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.page.html',
  styleUrls: ['./showdetails.page.scss'],
})
export class ShowdetailsPage implements OnInit {
    tv: TVdetails;
    similar: TVshow[];
    


  constructor(private movieService: MoviesService,
              private activateRoute: ActivatedRoute,
              private router: Router,
              private storageService: StorageService) { }

  ngOnInit() {
    let id = this.activateRoute.snapshot.params['id'];
    this.movieService.getTvDetails(id).subscribe(result => {
      this.tv = result; console.log(this.tv);
    });
    this.movieService.getSimilarTvShows(id).subscribe(res => {
      this.similar = res; console.log(this.similar);
    });
  }

  onTvClick(id){
    this.router.navigate(['tv', id])
  }

  
  addToWatchList(tv: Object){
    let unit =  mapToStorageUnit(tv.name, tv.poster_path,  tv.id, tv.overview, false, tv.average_rating);
    this.storageService.addToWatchList(unit);
    console.log('added show to watchlist');
  }

  collectTombstone(id){
    let unit =  mapToStorageUnit(tv.name, tv.poster_path,  tv.id, tv.overview, false, tv.average_rating);
    this.storageService.collectTombstone(unit);
    console.log('collected show tombstone');
  }

  onSeasonClick(id, season_number){
      this.router.navigate(['tv', id, 'season', season_number]);
  }

}
