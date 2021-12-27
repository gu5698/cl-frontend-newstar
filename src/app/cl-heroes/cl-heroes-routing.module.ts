import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClHeroesComponent } from './cl-heroes.component';

const routes: Routes = [{ path: '', component: ClHeroesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClHeroesRoutingModule { }
