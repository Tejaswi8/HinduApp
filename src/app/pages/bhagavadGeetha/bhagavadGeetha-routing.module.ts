import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BhagavadGeethaPage } from './bhagavadGeetha';

const routes: Routes = [
  {
    path: '',
    component: BhagavadGeethaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BhagavadGeethaPageRoutingModule { }
