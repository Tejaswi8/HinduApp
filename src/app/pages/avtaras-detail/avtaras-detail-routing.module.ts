import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AvtarasDetailPage } from './avtaras-detail';

const routes: Routes = [
  {
    path: '',
    component: AvtarasDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AvtarasDetailPageRoutingModule { }
