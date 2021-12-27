import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { BonusPointComponent } from './bonus-point/bonus-point.component';

const routes: Routes = [
  { path: '', redirectTo: '/cl-dashboard', pathMatch: 'full' },
  { path: 'cl-dashboard', loadChildren: () => import('./cl-dashboard/cl-dashboard.module').then(m => m.ClDashboardModule) },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'cl-heroes', loadChildren: () => import('./cl-heroes/cl-heroes.module').then(m => m.ClHeroesModule) },
  { path: 'bonusPoint', component: BonusPointComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
