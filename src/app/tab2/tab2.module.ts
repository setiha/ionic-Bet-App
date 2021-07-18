import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import {AppModule} from "../app.module";
import {TranslatePipe} from "../../pipes/translate.pipe";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
  ],
  declarations: [Tab2Page, TranslatePipe]
})
export class Tab2PageModule {}
