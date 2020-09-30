import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { YugasPage } from './yugas';
import { YugasFilterPage } from '../yugas-filter/yugas-filter';
import { YugasPageRoutingModule } from './yugas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YugasPageRoutingModule
  ],
  declarations: [
    YugasPage,
    YugasFilterPage
  ],
  entryComponents: [
    YugasFilterPage
  ]
})
export class YugasModule { }
