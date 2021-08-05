import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {TranslateService} from '../services/translate.service';
import {ClubService} from '../services/club.service';
import {MatchService} from '../services/match.service';
import {BetModalComponent} from './bet-modal/bet-modal.component';
import {AboutPageModule} from './about/about.module';
import {HomePageModule} from "./home/home.module";
import {TranslatePipe} from "../pipes/translate.pipe";
import {BetModalFormComponent} from "./bet-modal-form/bet-modal-form.component";
import {FormsModule} from "@angular/forms";
import {IonicStorageModule} from '@ionic/storage-angular';
import {StorageService} from "../services/storage.service";


@NgModule({
  declarations: [AppComponent, BetModalComponent, BetModalFormComponent,],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
    AppRoutingModule, HttpClientModule,
    AboutPageModule, HomePageModule,
    FormsModule, IonicStorageModule.forRoot()],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  }, TranslateService, ClubService,
    MatchService, TranslatePipe, StorageService],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
