import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MahabharathPage } from './mahabharath';
import { MahaPopoverPage } from '../mahabharath-popover/mahabharath-popover';
import { MahabharathPageRoutingModule } from './mahabharath-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MahabharathPageRoutingModule
  ],
  declarations: [MahabharathPage, MahaPopoverPage],
  entryComponents: [MahaPopoverPage],
  bootstrap: [MahaPopoverPage],
})
export class MahabharathModule {}
