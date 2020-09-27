import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VedasListPage } from './vedas-list';
const routes: Routes = [
  {
    path: '',
    component: VedasListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VedasListPageRoutingModule {}
