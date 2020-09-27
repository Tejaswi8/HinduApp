import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import { RamayanModule } from '../ramayan/ramayan.module';
import { MahabharathModule } from '../mahabharath/mahabharath.module';
import { BhagavadGeethaModule } from '../bhagavadGeetha/bhagavadGeetha.module';
import { MapModule } from '../map/map.module';
import { ScheduleModule } from '../schedule/schedule.module';
import { SessionDetailModule } from '../session-detail/session-detail.module';
import { VedasDetailModule } from '../vedas-detail/vedas-detail.module';
import { VedasListModule } from '../vedas-list/vedas-list.module';

@NgModule({
  imports: [
    AboutModule,
    RamayanModule,
    MahabharathModule,
    BhagavadGeethaModule,
    CommonModule,
    IonicModule,
    MapModule,
    ScheduleModule,
    SessionDetailModule,
    VedasDetailModule,
    VedasListModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
