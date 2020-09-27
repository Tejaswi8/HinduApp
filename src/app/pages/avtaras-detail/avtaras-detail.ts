import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvtarasData } from '../../providers/avtaras-data';
import { ActionSheetController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'page-avtaras-detail',
  templateUrl: 'avtaras-detail.html',
  styleUrls: ['./avtaras-detail.scss'],
})
export class AvtarasDetailPage {
  avtaras: any;

  constructor(
    private dataProvider: AvtarasData,
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    public confData: AvtarasData,
    public inAppBrowser: InAppBrowser,
  ) {}

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      const avtarasId = this.route.snapshot.paramMap.get('avtarasId');
      if (data && data.avtaras) {
        for (const avtaras of data.avtaras) {
          if (avtaras && avtaras.id === avtarasId) {
            this.avtaras = avtaras;
            break;
          }
        }
      }
    });
  }

  openExternalUrl(url: string) {
    this.inAppBrowser.create(
      url,
      '_blank'
    );
  }

  async openavtarashare(avtaras: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + avtaras.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://twitter.com/' + avtaras.twitter
            );
            if (
              (window as any).cordova &&
              (window as any).cordova.plugins.clipboard
            ) {
              (window as any).cordova.plugins.clipboard.copy(
                'https://twitter.com/' + avtaras.twitter
              );
            }
          }
        },
        {
          text: 'Share via ...'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  async openContact(avtaras: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + avtaras.name,
      buttons: [
        {
          text: `Email ( ${avtaras.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + avtaras.email);
          }
        },
        {
          text: `Call ( ${avtaras.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + avtaras.phone);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }
}
