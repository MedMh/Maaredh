import { Component } from '@angular/core';

import { MenuController, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../tabs/tabs';


export interface Slide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController, public storage: Storage) {
    this.slides = [
      {
        title: 'Welcome to <b>ION2Location</b>',
        description: 'ION2Location will help you to build quickly location based app.',
        image: 'assets/img/ica-slidebox-img-1.png',
      },
      {
        title: 'What is ION2Location?',
        description: 'This template will contains all required setup for starting the process and implement in your buisiness logic',
        image: 'assets/img/ica-slidebox-img-2.png',
      },
      {
        title: 'What is Ionic Platform?',
        description: 'The <b>Ionic Platform</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.',
        image: 'assets/img/ica-slidebox-img-3.png',
      }
    ];
  }

  startApp() {
    this.navCtrl.push(TabsPage);
    this.storage.set('hasSeenTutorial', 'true');
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
