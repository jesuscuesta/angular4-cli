import { Component, OnInit } from '@angular/core';

export class Atributos {
	nombrereal: string;
	fuerza: number;
	velocidad: number;
	resistencia: number;
	energia: number;
}

@Component({
  selector: 'daredevil',
  templateUrl: './daredevil.component.html',
  styleUrls: ['./daredevil.component.css']
})

export class DaredevilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombre:String = 'Daredevil';
  poderes:Array<String> = ['Ver en la oscuridad', 'Artes marciales'];
  atributos: Atributos = {
  	nombrereal: "Murdoc",
  	fuerza: 1,
  	velocidad: 1,
  	resistencia: 1,
  	energia: 1
  }
}
