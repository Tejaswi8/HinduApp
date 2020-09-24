import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RamayanPage } from './ramayan';

const routes: Routes = [
  {
    path: '',
    component: RamayanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RamayanPageRoutingModule { }
