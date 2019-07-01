import { Component, OnInit } from '@angular/core';
import { Episode } from './../models/Episode';
import { MovieService } from './../service/MovieService';
@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

  episode: Episode;
  
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    let id = this.activateRoute.snapshot.params['id', 'seasonid', 'episodeid'];
    //make sure that :season_number is in your app routes
    this.movieService.getEpisode(id, season_number, episode_number).subscribe(res => {
      this.episode = res; console.log(this.episode);
    });                                                                       
  }

}
