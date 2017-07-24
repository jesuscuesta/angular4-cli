import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DecoratorsComponent } from './decorators.component';
import { routing } from './decorators-routing.module';

import { JokerComponent } from './joker/joker.component';
import { SecuazComponent } from './joker/secuaz/secuaz.component';
import { QuinnComponent } from './quinn/quinn.component';
import { AyudanteComponent } from './quinn/ayudante/ayudante.component';

@NgModule({
  imports: [routing],
  declarations: [
    DecoratorsComponent,
    JokerComponent,
    SecuazComponent,
    QuinnComponent,
    AyudanteComponent
  ]
})
export class DecoratorsModule {}
