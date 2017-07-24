import { Input, Component } from '@angular/core';

@Component({
  selector: 'ayudante',
  templateUrl: './ayudante.component.html',
  styleUrls: ['./ayudante.component.css']
})
export class AyudanteComponent {
 
  @Input() ok;

  constructor() {}
  
  bienvenida() {
    console.log("Ya estamos aqui");
  }
  
  despedida() {
    console.log("Nos vamos de aqui");
  }

}
