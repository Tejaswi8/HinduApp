import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { VedasListPage } from './vedas-list';
import { VedasListPageRoutingModule } from './vedas-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    VedasListPageRoutingModule
  ],
  declarations: [VedasListPage],
})
export class VedasListModule {}
