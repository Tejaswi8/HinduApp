import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { GitaPopoverPage } from '../bhagavadGeetha-popover/bhagavadGeetha-popover';

@Component({
  selector: 'page-bhagavadGeetha',
  templateUrl: 'bhagavadGeetha.html',
  styleUrls: ['./bhagavadGeetha.scss'],
})
export class BhagavadGeethaPage {
  location = 'madison';
  conferenceDate = '2047-05-17';

  selectOptions = {
    header: 'Select a Location'
  };

  constructor(public popoverCtrl: PopoverController) { }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: GitaPopoverPage,
      event
    });
    await popover.present();
  }
}
