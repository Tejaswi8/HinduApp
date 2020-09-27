import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VedasDetailPage } from './vedas-detail';

const routes: Routes = [
  {
    path: '',
    component: VedasDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VedasDetailPageRoutingModule { }
