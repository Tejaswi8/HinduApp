import { Component } from '@angular/core';
import { AvtarasData } from '../../providers/avtaras-data';

@Component({
  selector: 'page-avtaras-list',
  templateUrl: 'avtaras-list.html',
  styleUrls: ['./avtaras-list.scss'],
})
export class AvtarasListPage {
  avtaras: any[] = [];

  constructor(public confData: AvtarasData) {}

  ionViewDidEnter() {
    this.confData.getavtaras().subscribe((avtaras: any[]) => {
      this.avtaras = avtaras;
    });
  }
}
