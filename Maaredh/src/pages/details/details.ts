import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 import { MapPage } from '../map/map';
 import { CartePage } from '../carte/carte';
 import { StonPage } from '../ston/ston';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  goMap(){
  	this.navCtrl.push(MapPage);
  }
  
  goCarte(){
    this.navCtrl.push(CartePage);
  }

  goStand(){
    this.navCtrl.push(StonPage);
  }

}
