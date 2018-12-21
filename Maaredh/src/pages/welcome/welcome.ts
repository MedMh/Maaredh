import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 import { TabsPage } from '../tabs/tabs';
 import { DetailsPage } from '../details/details';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

	rootPage:any = TabsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  details(){
  	this.navCtrl.push(DetailsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  onInput($event){
    
  }
  onCancel($event){

  }

}
