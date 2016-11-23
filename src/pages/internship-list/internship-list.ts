import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the InternshipList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-internship-list',
  templateUrl: 'internship-list.html'
})
export class InternshipListPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello InternshipListPage Page');
  }

}
