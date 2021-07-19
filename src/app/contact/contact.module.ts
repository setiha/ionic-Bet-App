import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ContactPage} from "./contact.page";
import {ContactPageRoutingModule} from "./contact-routing.module";
import {TranslatePipe} from "../../pipes/translate.pipe";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ContactPage }]),
    ContactPageRoutingModule,
  ],
  declarations: [ContactPage,TranslatePipe],
  exports: [
    TranslatePipe
  ],
})
export class ContactPageModule {}
