import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
  result: number;
  constructor(private popoverCtrl: PopoverController) { }


  ngOnInit() {
  }

  async dismiss(){
    await this.popoverCtrl.dismiss(this.result);
  }

}
