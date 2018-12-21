import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StonPage } from './ston';

@NgModule({
  declarations: [
    StonPage,
  ],
  imports: [
    IonicPageModule.forChild(StonPage),
  ],
})
export class StonPageModule {}
