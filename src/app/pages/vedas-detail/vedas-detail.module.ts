import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VedasDetailPage } from './vedas-detail';
import { VedasDetailPageRoutingModule } from './vedas-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    VedasDetailPageRoutingModule
  ],
  declarations: [
    VedasDetailPage,
  ]
})
export class VedasDetailModule { }
