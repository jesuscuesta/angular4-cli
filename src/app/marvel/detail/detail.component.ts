import { Component, Input } from '@angular/core';
import { Mutante } from './../mutante';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
	@Input() mutante: Mutante;
}
