import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-bet-modal-form',
  templateUrl: './bet-modal-form.component.html',
  styleUrls: ['./bet-modal-form.component.scss'],
})
export class BetModalFormComponent implements OnInit {
  @Input() match;
  winner = {};

  constructor(public modalController: ModalController) {
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss().then(value => value);
  }
}
