import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BhagavadGeethaPage } from './bhagavadGeetha';
import { GitaPopoverPage } from '../bhagavadGeetha-popover/bhagavadGeetha-popover';
import { BhagavadGeethaPageRoutingModule } from './bhagavadGeetha-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BhagavadGeethaPageRoutingModule
  ],
  declarations: [BhagavadGeethaPage, GitaPopoverPage],
  entryComponents: [GitaPopoverPage],
  bootstrap: [GitaPopoverPage],
})
export class BhagavadGeethaModule {}
