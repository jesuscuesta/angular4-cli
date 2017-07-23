import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SupermanComponent } from './superhero/superman/superman.component';
import { WonderwomanComponent } from './superhero/wonderwoman/wonderwoman.component';
import { AquamanComponent } from './superhero/aquaman/aquaman.component';
import { DaredevilComponent } from './superhero/daredevil/daredevil.component';
import { MarvelComponent } from './marvel/marvel.component';
import { ArrowComponent } from './superhero/arrow/arrow.component';
import { FlashComponent } from './superhero/flash/flash.component';
import { BirdmanComponent } from './superhero/birdman/birdman.component';
import { CatwomanComponent } from './superhero/catwoman/catwoman.component';
import { CyborgComponent } from './superhero/cyborg/cyborg.component';
import { ShazzamComponent } from './superhero/shazzam/shazzam.component';
import { BatgirlComponent } from './superhero/batgirl/batgirl.component';
import { HeroDetailComponent } from './superhero/batgirl/hero-detail/hero-detail.component';
import { DriceComponent } from './superhero/drice/drice.component';

import { VillaneComponent } from './villane/villane.component';
import { ListComponent } from './villane/components/list.component';
import { DetailVillaneComponent } from './villane/components/detail/detail.component';
import { HomeVillaneComponent } from './villane/components/home/home.component';

import { MrfantasticComponent } from './mrfantastic/mrfantastic.component';

const routes: Routes = [
  { path: 'superman', component: SupermanComponent },
  { path: 'wonderwoman', component: WonderwomanComponent },
  { path: 'aquaman', component: AquamanComponent },
  { path: 'daredevil', component: DaredevilComponent },
  { path: 'marvel', component: MarvelComponent },
  { path: 'arrow', component: ArrowComponent },
  { path: 'flash', component: FlashComponent },
  { path: 'birdman', component: BirdmanComponent },
  { path: 'catwoman', component: CatwomanComponent },
  { path: 'cyborg', component: CyborgComponent },
  { path: 'shazzam', component: ShazzamComponent },
  { path: 'batgirl', component: BatgirlComponent },
  { path: 'batdetail/:id', component: HeroDetailComponent },
  { path: 'drice', component: DriceComponent },
  { path: 'villane-center', component: VillaneComponent,
      children: [
            { path: '', redirectTo: 'listado', pathMatch: 'full' },
            { path: 'listado', component: ListComponent },
            { path: 'home', component: HomeVillaneComponent },
            { path: 'detail', component: DetailVillaneComponent }
          ]},
  { path: 'zoom', loadChildren: 'app/zoom/zoom.module#ZoomModule'},
  { path: 'mrfantastic', component: MrfantasticComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
