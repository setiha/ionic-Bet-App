import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ContactPage} from "./contact.page";
import {ContactPageRoutingModule} from "./contact-routing.module";
import {AboutPageModule} from "../about/about.module";
import {HomePageModule} from "../home/home.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: ContactPage}]),
        ContactPageRoutingModule,
        AboutPageModule,
        HomePageModule,
    ],
  declarations: [ContactPage],
  exports: [
  ],
})
export class ContactPageModule {}
