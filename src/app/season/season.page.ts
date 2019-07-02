import { Component, OnInit } from '@angular/core';
import { SeasonDetails } from './../models/SeasonDetails'
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../service/movies.service';


@Component({
  selector: 'app-season',
  templateUrl: './season.page.html',
  styleUrls: ['./season.page.scss'],
})
export class SeasonPage implements OnInit {
    season: SeasonDetails;


  constructor(private activateRoute: ActivatedRoute,
              private movieService: MoviesService) { }

  ngOnInit() {
    let season_number = this.activateRoute.snapshot.params['season_number'];
    let id = this.activateRoute.snapshot.params['id'];
    this.getSeasonDetails(id, season_number);
  }

  getSeasonDetails(id, season_number){
    this.movieService.getSeason(id, season_number).subscribe(res => {
      this.season = res; console.log(this.season);
    })
  }

}
