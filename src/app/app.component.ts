import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StorageService } from './service/storage.service';
import { StorageUnit } from './models/StorageUnit';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  

  public appPages = [
    {
      title: 'Home',
      url: '/main',
      icon: 'home',
      badge: false,
      size: null
    },
    {
      title: 'Trending Now',
      url: '/home',
      icon: 'bulb',
      badge: false
    },
    {
      title: 'Genres',
      url: '/genreselect',
      icon: 'book',
      badge: false
    },
    {
      title: 'Favorites',
      url: '/favorites',
      icon: 'star',
      badge: true,
    },
    {
      title: 'Recommended',
      url: 'recommended',
      icon: 'thumbs-up',
      badge: false,
      children: [
        {
          title: 'Recommended Movies',
          url: 'recommended-movies'
        },
        {
          title: 'Recommended Shows',
          url: 'recommended-shows'
        }
      ]
    },
    {
      title: 'Watch List',
      url: '/list',
      icon: 'list',
      badge: true,
    },
    {
      title: 'Tombstones',
      url: '/library',
      icon: 'book',
      badge: true
    },
    {
      title: 'Search',
      url: '/search',
      icon: 'search',
      badge: false
    },
    {
      title: 'about',
      url: '/about',
      icon: 'information',
      badge: false
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storageService: StorageService
  ) {
    this.initializeApp();
    
    
    
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
