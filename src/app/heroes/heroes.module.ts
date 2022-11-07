import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';

import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  declarations: [
    HeroChildComponent,
    HeroParentComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
