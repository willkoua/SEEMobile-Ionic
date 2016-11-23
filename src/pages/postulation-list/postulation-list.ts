import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the PostulationList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-postulation-list',
  templateUrl: 'postulation-list.html'
})
export class PostulationListPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PostulationListPage Page');
  }

}
