import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { FirstPage } from '../pages/first/first';
import { DetailsPage } from '../pages/details/details';
import { MapPage } from '../pages/map/map';
import { GoogleMapComponent } from '../components/google-map/google-map';
import { CartePage } from '../pages/carte/carte';
import { StonPage } from '../pages/ston/ston';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    TabsPage,
    AboutPage,
    ContactPage,
    FirstPage,
    DetailsPage,
    MapPage,
    GoogleMapComponent,
    CartePage,
    StonPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    TabsPage,
    AboutPage,
    ContactPage,
    FirstPage,
    DetailsPage,
    MapPage,
    GoogleMapComponent,
    CartePage,
    StonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
