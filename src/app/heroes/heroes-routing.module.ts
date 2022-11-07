import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroParentComponent } from './hero-parent/hero-parent.component';

const routes: Routes = [
  {
    path: '',
    component: HeroParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
