import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RamayanPage } from './ramayan';
import { RmPopoverPage } from '../ramayan-popover/ramayan-popover';
import { RamayanPageRoutingModule } from './ramayan-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RamayanPageRoutingModule
  ],
  declarations: [RamayanPage, RmPopoverPage],
  entryComponents: [RmPopoverPage],
  bootstrap: [RamayanPage],
})
export class RamayanModule {}
