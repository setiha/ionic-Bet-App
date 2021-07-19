import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './about.page';
import {TranslatePipe} from "../../pipes/translate.pipe";
import {AboutPageRoutingModule} from "./about-routing.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        AboutPageRoutingModule,
    ],
    exports: [
        TranslatePipe
    ],
    declarations: [AboutPage, TranslatePipe]
})
export class AboutPageModule {}
