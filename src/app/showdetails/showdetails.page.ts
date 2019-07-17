import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TVdetails } from '../models/TVdetails';
import { TVshow } from '../models/TVshow';
import { Season } from '../models/Season';
import { StorageService } from '../service/storage.service';
import { ToastController } from '@ionic/angular'
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.page.html',
  styleUrls: ['./showdetails.page.scss'],
})
export class ShowdetailsPage implements OnInit {
    tv: TVdetails;
    similar: TVshow[];
  decryptedUrl: SafeResourceUrl;
    


  constructor(private movieService: MoviesService,
              private activateRoute: ActivatedRoute,
              private router: Router,
              private storageService: StorageService,
              private toast: ToastController,
              private domSanitizer: DomSanitizer,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadingDisplay();
    let id = this.activateRoute.snapshot.params['id'];
    this.movieService.getTvDetails(id).subscribe(result => {
      this.tv = result; console.log(this.tv);
    });
   
    this.movieService.getSimilarTvShows(id).subscribe(res => {
      this.similar = res; console.log(this.similar);
    });
    this.buildUrl();
  }
  
   buildUrl(){
     console.log('function hit')
    this.decryptedUrl = this.domSanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed?v=mkGT1c98soU");
  
  }
  onTvGenreClick(name, id){
    this.router.navigate(['genre', 't', name, id]);
  }
 
  onTvClick(id){
    this.router.navigate(['tv', id])
  }
  
  async loadingDisplay(){
   let load = await this.loadingCtrl.create({
      duration: 200000
   });
  }

  async toastSuccess(unit: TVdetails, type: boolean){
    let loc;
    if(type){
      loc = 'to Watchlist'
    }else{
      loc = 'to Tombstones'
    }
    let showToast = await this.toast.create({
      message: `successfully added ${unit.name} ${loc}`,
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });
    return await showToast.present() 
  }

  async toastFailure(unit: TVdetails){
    let showToast = await this.toast.create({
      message: 'failure',
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
    this.toastSuccess(this.tv, true)

  }

  collectTombstone(){
    let unit =  this.storageService.mapTvToStorageUnit(this.tv, 10);
    this.storageService.collectTvTombstone(unit);
    this.toastSuccess(this.tv, false);
  }

  onSeasonClick(id, season_number){
      this.router.navigate(['tv', id, 'season', season_number]);
  }

}
