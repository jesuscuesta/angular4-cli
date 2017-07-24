import { Component, OnInit, ViewChild } from '@angular/core';
import { SecuazComponent } from './secuaz/secuaz.component';

@Component({
  selector: 'app-joker',
  templateUrl: './joker.component.html',
  styleUrls: ['./joker.component.css']
})
export class JokerComponent {

  @ViewChild(SecuazComponent) secuaz: SecuazComponent;
  
  constructor() { }

  mirarSecuaz(){
    this.secuaz.saludo();
  }
}
