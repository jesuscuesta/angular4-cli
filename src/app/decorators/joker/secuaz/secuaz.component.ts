import { Component } from '@angular/core';

@Component({
  selector: 'secuaz',
  templateUrl: './secuaz.component.html'
})
export class SecuazComponent {

  constructor() { }

  saludo(){
    alert("Estoy a tus órdenes Joker");
  }

}
