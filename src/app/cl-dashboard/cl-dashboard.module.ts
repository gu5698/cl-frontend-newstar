import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClDashboardRoutingModule } from './cl-dashboard-routing.module';
import { ClDashboardComponent } from './cl-dashboard.component';
import { HeroSearchComponent }  from '../hero-search/hero-search.component';


@NgModule({
  declarations: [
    ClDashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    CommonModule,
    ClDashboardRoutingModule
  ]
})
export class ClDashboardModule { }
