import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Interview page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-interview',
  templateUrl: 'interview.html'
})
export class InterviewPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello InterviewPage Page');
  }

}
