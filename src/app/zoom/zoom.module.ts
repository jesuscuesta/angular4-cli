import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ZoomComponent } from './zoom.component';
import { routing } from './zoom-routing.module';

@NgModule({
  imports: [routing],
  declarations: [ZoomComponent]
})
export class ZoomModule {}
