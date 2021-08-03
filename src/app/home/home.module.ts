import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';

import {HomePageRoutingModule} from './home-routing.module';
import {TranslatePipe} from "../../pipes/translate.pipe";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage,TranslatePipe],
  exports: [
    TranslatePipe
  ],
})
export class HomePageModule {
}
