import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { MahaPopoverPage } from '../mahabharath-popover/mahabharath-popover';

@Component({
  selector: 'page-mahabharath',
  templateUrl: 'mahabharath.html',
  styleUrls: ['./mahabharath.scss'],
})
export class MahabharathPage {
  location = 'madison';
  conferenceDate = '2047-05-17';

  selectOptions = {
    header: 'Select a Location'
  };

  constructor(public popoverCtrl: PopoverController) { }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: MahaPopoverPage,
      event
    });
    await popover.present();
  }
}
