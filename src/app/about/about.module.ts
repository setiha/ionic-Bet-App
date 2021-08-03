import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './about.page';
import {AboutPageRoutingModule} from "./about-routing.module";
import {TranslatePipe} from "../../pipes/translate.pipe";
import {HomePageModule} from "../home/home.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AboutPageRoutingModule,
    HomePageModule,
  ],
  exports: [
  ],
  declarations: [AboutPage]
})
export class AboutPageModule {}
