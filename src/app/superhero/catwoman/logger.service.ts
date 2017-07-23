import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Enemigo } from './enemigo';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class LoggerService {
	constructor( private http:Http) {
	}

	getEnemigos() {
    	return this.http.get('https://content.guardianapis.com/technology/2014/feb/18/doge-such-questions-very-answered?api-key=test').map((res:Response) => res.json());
  	}
}