import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Postulation } from '../../models/postulation';
import { Postulations } from '../../providers/postulations';

import { PostulationPage } from '../postulation/postulation';

@Component({
  selector: 'page-postulation-list',
  templateUrl: 'postulation-list.html'
})

export class PostulationListPage {
  postulations: Postulation[];
  originalPostulations: Postulation[];

  constructor(public navCtrl: NavController, private listPostulation : Postulations) {
  	listPostulation.load().subscribe(
  		postulations => { 
  			this.postulations = postulations;
  			this.originalPostulations = postulations;
  	})
  }

  goToDetails(login: string){
  	this.navCtrl.push(PostulationPage, {login});
  }

  search(searchEvent){
  	let term = searchEvent.target.value

  	// Perform search only if 3 characters or more.
  	if(term.trim() === '' || term.trim().lenght < 3){
  		// Load cached users
  		this.postulations = this.originalPostulations;
  	} else {
  		// Get the searched users
  		this.listPostulation.searchPostulations(term).subscribe(
  		postulations => { 
  			this.postulations = postulations;
  		});
  	}
  }
}
