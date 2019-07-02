import { Component, OnInit } from '@angular/core';
import { Episode } from './../models/Episode';
import { MoviesService } from './../service/movies.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

  episode: Episode;
  
  constructor(private movieService: MoviesService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activateRoute.snapshot.params['id'];
    let episode_number = this.activateRoute.snapshot.params['episode_number'];
    let season_number = this.activateRoute.snapshot.params['season_number'];
    //make sure that :season_number is in your app routes
    // this.movieService.getEpisode(id, season_number, episode_number).subscribe(res => {
    //   this.episode = res; console.log(this.episode);
    // });                                                                       
  }

}
