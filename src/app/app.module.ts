import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { HeroService } from './superhero/batgirl/hero.service';

import { AppComponent } from './app.component';
import { SupermanComponent } from './superhero/superman/superman.component';
import { WonderwomanComponent } from './superhero/wonderwoman/wonderwoman.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { AquamanComponent } from './superhero/aquaman/aquaman.component';
import { DaredevilComponent } from './superhero/daredevil/daredevil.component';
import { MarvelComponent } from './marvel/marvel.component';
import { DetailComponent } from './marvel/detail/detail.component';
import { ArrowComponent } from './superhero/arrow/arrow.component';
import { FlashComponent } from './superhero/flash/flash.component';
import { BirdmanComponent } from './superhero/birdman/birdman.component';
import { CatwomanComponent } from './superhero/catwoman/catwoman.component';
import { CyborgComponent } from './superhero/cyborg/cyborg.component';

import { AppRoutingModule } from './app-routing.module';
import { ShazzamComponent } from './superhero/shazzam/shazzam.component';

import { BatgirlComponent } from './superhero/batgirl/batgirl.component';
import { HeroDetailComponent } from './superhero/batgirl/hero-detail/hero-detail.component';
import { DriceComponent } from './superhero/drice/drice.component';
import { FuerzaPipe } from './pipes/fuerza.pipe';
import { VillaneComponent } from './villane/villane.component';
import { ListComponent } from './villane/components/list.component';
import { DetailVillaneComponent } from './villane/components/detail/detail.component';
import { HomeVillaneComponent } from './villane/components/home/home.component';
import { MrfantasticComponent } from './mrfantastic/mrfantastic.component';

@NgModule({
  declarations: [
    FuerzaPipe,
    AppComponent,
    SupermanComponent,
    WonderwomanComponent,
    FooterComponent,
    HeaderComponent,
    AquamanComponent,
    DaredevilComponent,
    MarvelComponent,
    DetailComponent,
    ArrowComponent,
    FlashComponent,
    BirdmanComponent,
    CatwomanComponent,
    CyborgComponent,
    ShazzamComponent,
    BatgirlComponent,
    HeroDetailComponent,
    DriceComponent,
    VillaneComponent,
    ListComponent,
    DetailVillaneComponent,
    HomeVillaneComponent,
    MrfantasticComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
