import { Component, OnInit, ViewChild } from '@angular/core';
import { SecuazComponent } from './secuaz/secuaz.component';

@Component({
  selector: 'app-joker',
  templateUrl: './joker.component.html',
  styleUrls: ['./joker.component.css']
})
export class JokerComponent implements OnInit {

  @ViewChild(SecuazComponent) secuaz: SecuazComponent


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Después de inicializar la vista, mirarSecuaz se cargará.
    this.mirarSecuaz();
  }

  mirarSecuaz(){
    this.secuaz.saludo();
  }

}
