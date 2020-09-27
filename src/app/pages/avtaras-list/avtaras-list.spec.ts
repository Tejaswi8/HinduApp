import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { TestBed, async } from '@angular/core/testing';
import { ActionSheetController } from '@ionic/angular';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AvtarasListPage } from './avtaras-list';
import { AvtarasData } from '../../providers/avtaras-data';

const confDataSub = {};

describe('AvtarasListPage', () => {
  let fixture, app;
  beforeEach(async(() => {
    const actionSheetSpy = jasmine.createSpyObj('ActionSheetController', [
      'create'
    ]);
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    const iabSpy = jasmine.createSpyObj('InAppBrowser', ['create']);

    TestBed.configureTestingModule({
      declarations: [AvtarasListPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ActionSheetController, useValue: actionSheetSpy },
        { provide: InAppBrowser, useValue: iabSpy },
        { provide: Router, useValue: routerSpy },
        { provide: AvtarasData, useValue: confDataSub }
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AvtarasListPage);
    app = fixture.debugElement.componentInstance;
  });
  it('should create the avtaras list page', () => {
    expect(app).toBeTruthy();
  });
});
