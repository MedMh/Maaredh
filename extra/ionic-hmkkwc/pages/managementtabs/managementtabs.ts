import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FirstPage } from '../first/first';
import { SecondPage } from '../second/second';
@Component({
  templateUrl: 'managementtabs.html'
})
export class MangementtabPage {

  tab1Root = FirstPage;
  tab2Root = SecondPage;
 

  constructor() {

  }
}
