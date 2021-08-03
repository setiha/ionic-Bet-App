import {Component} from '@angular/core';
import {ClubService} from '../../services/club.service';
import {MatchService} from '../../services/match.service';
import {ModalController, NavParams} from '@ionic/angular';
import {BetModalComponent} from '../bet-modal/bet-modal.component';
import {TranslatePipe} from '../../pipes/translate.pipe';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  providers: [NavParams]
})
export class AboutPage {
  rounds: Array<any> = [];

  constructor(private translatePipe: TranslatePipe,
              private clubService: ClubService,
              private mService: MatchService,
              public modalController: ModalController,
              public params: NavParams) {
    this.mService.getAll().then(clubs => {
      this.rounds = clubs.rounds as Array<any>;
    });
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
