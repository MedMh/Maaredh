import { NgModule } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ION2LocationApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { OffersPage } from '../pages/offers/offers';
import { OffersDetailPage } from '../pages/offers-detail/offers-detail';
import { SubscribePage } from '../pages/subscribe/subscribe';
import { SignupPage } from '../pages/signup/signup';
import { ContactPage } from '../pages/contact/contact';
import { PlacesListPage } from '../pages/places-list/places-list';
import { PlacesDetailPage } from '../pages/places-detail/places-detail';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';
import { AutocompletePage } from '../pages/autocomplete/autocomplete';

import { OffersData } from '../providers/offers-data';
import { UserData } from '../providers/user-data';
import { Utility } from '../providers/utility';


@NgModule({
  declarations: [
    ION2LocationApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    OffersPage,
    SubscribePage,
    OffersDetailPage,
    SignupPage,
    ContactPage,
    PlacesListPage,
    PlacesDetailPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    AutocompletePage
  ],
  imports: [
    IonicModule.forRoot(ION2LocationApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ION2LocationApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    OffersPage,
    SubscribePage,
    OffersDetailPage,
    SignupPage,
    ContactPage,
    PlacesListPage,
    PlacesDetailPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    AutocompletePage
  ],
  providers: [UserData, Storage, Utility, OffersData]
})
export class AppModule { }

