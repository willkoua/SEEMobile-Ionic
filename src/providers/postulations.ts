import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';

import { Postulation } from '../models/postulation';

@Injectable()
export class Postulations {

	githubAPIUrl = 'https://api.github.com';

  	constructor(public http: Http) {}

	load(): Observable<Postulation[]> {
  		return this.http.get(`${this.githubAPIUrl}/users`).map(res => <Postulation[]>res.json());
  	}

  	loadDetails(login: string): Observable<Postulation> {
  		return this.http.get(`${this.githubAPIUrl}/users/${login}`).map(res => <Postulation>res.json());
  	}

  	searchPostulations(searchParam: string): Observable<Postulation[]> {
  		return this.http.get(`${this.githubAPIUrl}/search/users?q=${searchParam}`).map(res => <Postulation[]>(res.json().items));
  	}
  }