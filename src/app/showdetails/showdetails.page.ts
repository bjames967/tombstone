import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TVdetails } from '../models/TVdetails';
import { TVshow } from '../models/TVshow';
import { Season } from '../models/Season';
import { StorageService } from '../service/storage.service';
import { ToastController } from '@ionic/angular'
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Loading, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.page.html',
  styleUrls: ['./showdetails.page.scss'],
})
export class ShowdetailsPage implements OnInit {
    tv: TVdetails;
    similar: TVshow[];
  decryptedUrl: SafeResourceUrl;
  loading: Loading;
  backdrop_photo: HTMLImageElement;
    


  constructor(private movieService: MoviesService,
              private activateRoute: ActivatedRoute,
              private router: Router,
              private storageService: StorageService,
              private toast: ToastController) { }

  ngOnInit() {
    let id = this.activateRoute.snapshot.params['id'];
    this.movieService.getTvDetails(id).subscribe(result => {
      this.tv = result; console.log(this.tv);
    });
    loadImage(this.tv);
    loadVideo();
    this.movieService.getSimilarTvShows(id).subscribe(res => {
      this.similar = res; console.log(this.similar);
    });
  }
  
  loadImages(tv: TVdetails){
    this.backdrop_photo = `https://image.tmdb.org/t/p/original${tv.backdrop_path}`;
  }
  
   loadVideo(){
    this.decryptedUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(buildUrl(findHighestQualityVideo));
    this.loading = this.loadingCtrl.create({
      content: 'Fetching video...'
    });
    this.loading.present();
  }
  
  onFinishLoading(): void {
    this.loading.dismiss();
  }
   
  buildUrl(key: string): string{
   return `https://www.youtube.com/watch?v=${key}`;
  }
  
  findHighestQualityVideo(): string {
    let key;
    for(videos in this.tv.videos.results){
      if(videos.size === "1080"){
        key = videos.key;
        console.log('found 1080px');
        break;
      }else{
        key = this.movie.videos.results[0].key;
      }
    }
  }
  
  
  
  
  
  

  onTvClick(id){
    this.router.navigate(['tv', id])
  }

  async toastSuccess(unit: TVdetails){
    let showToast = await this.toast.create({
      message: 'success',
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });
    return await showToast.present() 
  }

  async toastFailure(unit: TVdetails){
    let showToast = await this.toast.create({
      message: 'Failure',
      duration: 2000,
      color: 'danger',
      position: 'bottom'
    });
    return await showToast.present() 
  }

  
  addTvToWatchList(){
    console.log('function hit')
    let unit =  this.storageService.mapTvToStorageUnit(this.tv, 10);
    this.storageService.addToTvWatchList(unit);
    console.log('added show to watchlist');
  }

  collectTombstone(){
    let unit =  this.storageService.mapTvToStorageUnit(this.tv, 10);
    this.storageService.collectTvTombstone(unit);
    this.toastSuccess(this.tv);
  }

  onSeasonClick(id, season_number){
      this.router.navigate(['tv', id, 'season', season_number]);
  }

}
