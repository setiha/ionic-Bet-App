import {Component, DoCheck, OnInit} from '@angular/core';
import {ClubService} from '../../services/club.service';
import {MatchService} from '../../services/match.service';
import {ModalController, NavParams} from '@ionic/angular';
import {BetModalComponent} from '../bet-modal/bet-modal.component';
import {TranslatePipe} from '../../pipes/translate.pipe';
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  providers: [NavParams]
})
export class AboutPage implements OnInit, DoCheck {
  rounds: Array<any> = [];
  amount = 0;
  storageCheck = false;

  constructor(private translatePipe: TranslatePipe,
              private clubService: ClubService,
              private mService: MatchService,
              public modalController: ModalController,
              public params: NavParams,
              public storageService: StorageService) {
    this.mService.getAll().then(clubs => {
      this.rounds = clubs.rounds as Array<any>;
    });
  }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.storageService.newStorage && !this.storageCheck) {
      this.storageService.getValue('amount').then(value => this.amount = value);
      this.storageCheck = true;
    }
  }

  async presentModal(event) {
    const modal = await this.modalController.create({
      component: BetModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        matches: event,
        newDate: event[0].date
      }
    });
    return await modal.present();
  }
}
