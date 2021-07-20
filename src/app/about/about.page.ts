import {Component} from '@angular/core';
import {TranslatePipe} from "../../pipes/translate.pipe";
import {ClubService} from "../../services/club.service";


@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  providers: [TranslatePipe]
})
export class AboutPage {
  translateP;
  clubs: Array<object> = [];

  constructor(private translatePipe: TranslatePipe,
              private clubService: ClubService) {
    this.translateP = translatePipe;
    this.clubService.getAll().then(clubs => this.clubs = clubs.clubs)
  }

}
