import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZoomComponent } from './zoom.component';

const routes: Routes = [
  { path: '', component: ZoomComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
