import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aquaman',
  templateUrl: './aquaman.component.html',
  styleUrls: ['./aquaman.component.css']
})
export class AquamanComponent implements OnInit {

  nombre: String = 'Aquaman';
  poderes: Array<String> = ['Respirar bajo el agua', 'invunerable','hablar con los peces'];

  constructor() { }

  ngOnInit() {
  }

}
