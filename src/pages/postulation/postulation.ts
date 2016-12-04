import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Postulation } from '../../models/postulation';
import { Postulations } from '../../providers/postulations'

@Component({
  selector: 'page-postulation',
  templateUrl: 'postulation.html'
})
export class PostulationPage {
	postulation : Postulation;
	login: string;

  constructor(public navCtrl: NavController, private navParams: NavParams, private postulations: Postulations) {
  	this.login = navParams.get('login');
  	this.postulations.loadDetails(this.login).subscribe(postulation => { this.postulation = postulation;})
  }
}
