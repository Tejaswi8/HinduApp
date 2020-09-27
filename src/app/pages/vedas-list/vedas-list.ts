import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-vedas-list',
  templateUrl: 'vedas-list.html',
  styleUrls: ['./vedas-list.scss'],
})
export class VedasListPage {
  vedas: any[] = [];

  constructor(public confData: ConferenceData) {}

  ionViewDidEnter() {
    this.confData.getvedas().subscribe((vedas: any[]) => {
      this.vedas = vedas;
    });
  }
}
