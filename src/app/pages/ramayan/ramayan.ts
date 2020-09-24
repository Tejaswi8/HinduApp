import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { RmPopoverPage } from '../ramayan-popover/ramayan-popover';

@Component({
  selector: 'page-ramayan',
  templateUrl: 'ramayan.html',
  styleUrls: ['./ramayan.scss'],
})
export class RamayanPage {
  location = 'madison';
  conferenceDate = '2047-05-17';

  selectOptions = {
    header: 'Select a Location'
  };

  constructor(public popoverCtrl: PopoverController) { }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: RmPopoverPage,
      event
    });
    await popover.present();
  }
}
