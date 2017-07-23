import { Component, Pipe } from '@angular/core';
import { FuerzaPipe } from './../../pipes/fuerza.pipe';

@Component({

  selector: 'app-drice',
  templateUrl: './drice.component.html',
  styleUrls: ['./drice.component.css']
})


export class DriceComponent {
  born = new Date(1966, 5, 25);
}
