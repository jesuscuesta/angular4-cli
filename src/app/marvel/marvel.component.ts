import { Component } from '@angular/core';

// Importamos el tipo Mutante. Así reducimos la dimensión del fichero.
import { Mutante } from './mutante';

const mutantes: Mutante[] = [
  { apodo: 'Spiderman', nombrereal: 'Spiderman', fuerza: 12, velocidad: 31, resistencia: 6, energia: 5 },
  { apodo: 'Lobezno', nombrereal: 'Mr. Lobezno', fuerza: 31, velocidad: 41, resistencia: 7, energia: 2 },
  { apodo: 'Mr. Increible', nombrereal: 'Mr. Increible', fuerza: 3, velocidad: 5, resistencia: 6, energia: 9 },
  { apodo: 'Ciclope', nombrereal: 'Ciclope', fuerza: 26, velocidad: 55, resistencia: 6, energia: 1 },
  { apodo: 'Colosus', nombrereal: 'Colosus', fuerza: 32, velocidad: 23, resistencia: 4, energia: 1 },
  { apodo: 'Gambito', nombrereal: 'Gambito', fuerza: 11, velocidad: 71, resistencia: 6, energia: 22 },
  { apodo: 'Surfista Plateado', nombrereal: 'Surfista Plateado', fuerza: 12, velocidad: 42, resistencia: 12, energia: 56 }
];

@Component({
  selector: 'marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})

export class MarvelComponent {

  // Creamos y asignamos el valor, de la variable que usaremos en la plantilla.
  mutante = mutantes;
  // Añadimos la clase a la variable selectedMutante, para poder sobreescribirlo.
  selectedMutante: Mutante;

  onSelect(mutante: Mutante): void {
    this.selectedMutante = mutante;
  }
}
