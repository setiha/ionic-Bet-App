import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {TranslatePipe} from "../../pipes/translate.pipe";
import {AboutPage} from "../about/about.page";
import {BetModalFormComponent} from "../bet-modal-form/bet-modal-form.component";

@Component({
  selector: 'app-bet-modal',
  templateUrl: './bet-modal.component.html',
  styleUrls: ['./bet-modal.component.scss'],
  providers: [NavParams]
})
export class BetModalComponent implements OnInit {
  @Input() matches: [];
  @Input() newDate: string;

  constructor(public modalController: ModalController,
              public params: NavParams) {
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss().then(value => value);
  }

  startBet(event) {
    this.presentModal(event).then(value => value);
  }

  async presentModal(event) {
    const modal = await this.modalController.create({
      component: BetModalFormComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        match:event
      }
    });
    return await modal.present();
  }
}
