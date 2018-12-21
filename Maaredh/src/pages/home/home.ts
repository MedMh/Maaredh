import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from '../first/first';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usr:string;
  pwd:string;

  constructor(public navCtrl: NavController) {
  	
  }

  login(){
  	if((this.usr=="root")&&(this.pwd="root")){
  		this.navCtrl.push(FirstPage);
  	}
  }

}
