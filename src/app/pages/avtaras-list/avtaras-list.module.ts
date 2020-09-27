import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AvtarasListPage } from './avtaras-list';
import { AvtarasListPageRoutingModule } from './avtaras-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AvtarasListPageRoutingModule
  ],
  declarations: [AvtarasListPage],
})
export class AvtarasListModule {}
