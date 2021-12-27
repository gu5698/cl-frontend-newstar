import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClHeroesRoutingModule } from './cl-heroes-routing.module';
import { ClHeroesComponent } from './cl-heroes.component';


@NgModule({
  declarations: [
    ClHeroesComponent
  ],
  imports: [
    CommonModule,
    ClHeroesRoutingModule
  ]
})
export class ClHeroesModule { }
