import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { YugasPage } from './yugas';

const routes: Routes = [
  {
    path: '',
    component: YugasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YugasPageRoutingModule { }
