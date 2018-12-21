import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { MapPage } from '../map/map';
import { OffersPage } from '../offers/offers';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = OffersPage;
  tab2Root: any = MapPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
