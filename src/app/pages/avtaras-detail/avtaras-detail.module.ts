import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvtarasDetailPage } from './avtaras-detail';
import { AvtarasDetailPageRoutingModule } from './avtaras-detail-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AvtarasDetailPageRoutingModule
  ],
  declarations: [
    AvtarasDetailPage,
  ]
})
export class AvtarasDetailModule { }
