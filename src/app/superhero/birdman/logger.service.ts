import { Injectable } from '@angular/core';
import { Enemigo } from './enemigo';
import { enemigos } from './mock-enemigo';

@Injectable()
export class LoggerService {
	getLogger(): Enemigo[] {
		return enemigos;
    }
}
