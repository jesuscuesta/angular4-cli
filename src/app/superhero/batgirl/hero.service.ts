import { Injectable } from '@angular/core';
import { Heroes } from './heroe';
import { enemigos } from './mock-enemigo';

@Injectable()
export class HeroService {
  // No llegamos a cargarlo nunca.
  getHeroes(): Promise<Heroes[]> {
    return Promise.resolve(enemigos);
  }

  // No llegamos a cargarlo nunca.
  getHeroesSlowly(): Promise<Heroes[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  // Seleccionamos por el id, el héroe seleccionado.
  getHero(id: number): Promise<Heroes> {
    return this.getHeroes().then(
      enemigos => enemigos.find(item => item.id === id));
  }
}