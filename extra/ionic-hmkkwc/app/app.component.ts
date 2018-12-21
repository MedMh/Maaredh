import { Component,ViewChild } from '@angular/core';
import { Platform ,NavController} from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { MangementtabPage } from '../pages/managementtabs/managementtabs';
import { RealisationPage } from '../pages/realisation/realisation';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild('nav') nav: NavController;
  rootPage:any = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
  }

  public OnHomeClicked(): void {
        this.nav.setRoot(TabsPage);
    }

    public OnManagementClicked(): void {
        this.nav.setRoot(MangementtabPage);
    }

    public OnRealisationClicked(): void {
        this.nav.setRoot(RealisationPage);
    }
}
