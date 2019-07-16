import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-genre-select',
  templateUrl: './genre-select.page.html',
  styleUrls: ['./genre-select.page.scss'],
})
export class GenreSelectPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  onShowGenreClick(id: number){
    this.router.navigate([type, 'movie', id]);
  }
  
  onMovieGenreClick(id: number){
     this.router.navigate(['t', 'Show', id]);
  }
  

}
