import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {TranslatePipe} from "../../pipes/translate.pipe";
import {AboutPage} from "../about/about.page";

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
              public translatePipe: TranslatePipe,
              public params: NavParams) {
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss().then(value => value);
  }
}
