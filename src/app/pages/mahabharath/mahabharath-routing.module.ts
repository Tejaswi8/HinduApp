import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MahabharathPage } from './mahabharath';

const routes: Routes = [
  {
    path: '',
    component: MahabharathPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MahabharathPageRoutingModule { }
