import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecoratorsComponent } from './decorators.component';
import { JokerComponent } from './joker/joker.component';
import { SecuazComponent } from './joker/secuaz/secuaz.component';

const routes: Routes = [
  { path: 'decorators/joker', component: JokerComponent },
  { path: '', component: DecoratorsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
