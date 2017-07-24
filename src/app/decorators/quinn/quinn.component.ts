import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AyudanteComponent } from '../quinn/ayudante/ayudante.component';

@Component({
  selector: 'app-quinn',
  templateUrl: './quinn.component.html',
  styleUrls: ['./quinn.component.css']
})
export class QuinnComponent {

  @ViewChildren(QuinnComponent) alerts: QueryList<QuinnComponent>;
}
