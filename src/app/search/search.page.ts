import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService} from './../services/search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {


  results: Observable<any>;
  searchTerm: string = '';
  constructor() { }

  ngOnInit() {
  }


}
