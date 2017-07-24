import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DecoratorsComponent } from './decorators.component';
import { JokerComponent } from './joker/joker.component';
import { QuinnComponent } from './quinn/quinn.component';

const routes: Routes = [
  { path: 'decorators/joker', component: JokerComponent },
  { path: 'decorators/quinn', component: QuinnComponent },
  { path: '', component: DecoratorsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
