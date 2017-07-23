import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroes } from './heroe';

const heroes: Heroes[] = [
  { id: 1, apodo: 'Spiderman', nombrereal: 'Spiderman', fuerza: 12, velocidad: 31, resistencia: 6, energia: 5 },
  { id: 2, apodo: 'Lobezno', nombrereal: 'Mr. Lobezno', fuerza: 31, velocidad: 41, resistencia: 7, energia: 2 },
  { id: 3, apodo: 'Mr. Increible', nombrereal: 'Mr. Increible', fuerza: 3, velocidad: 5, resistencia: 6, energia: 9 },
  { id: 4, apodo: 'Ciclope', nombrereal: 'Ciclope', fuerza: 26, velocidad: 55, resistencia: 6, energia: 1 },
  { id: 5, apodo: 'Colosus', nombrereal: 'Colosus', fuerza: 32, velocidad: 23, resistencia: 4, energia: 1 },
  { id: 6, apodo: 'Gambito', nombrereal: 'Gambito', fuerza: 11, velocidad: 71, resistencia: 6, energia: 22 },
  { id: 7, apodo: 'Surfista Plateado', nombrereal: 'Surfista Plateado', fuerza: 12, velocidad: 42, resistencia: 12, energia: 56 }
];
@Component({
  selector: 'batgirl',
  templateUrl: './batgirl.component.html',
  styleUrls: ['./batgirl.component.css']
})
export class BatgirlComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  heroe = heroes;
  selectedHeroe: Heroes;

  // Saber el héroe elegido.
  onSelect(heroe: Heroes): void {
    this.selectedHeroe = heroe;
  }

  // Ir al detalle, combinado con router y héroe seleccionado.
  gotoDetail(): void {
    this.router.navigate(['/batdetail', this.selectedHeroe.id]);
  }
}
