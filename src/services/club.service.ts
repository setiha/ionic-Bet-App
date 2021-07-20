import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  clubsUrl: string = '../assets/clubs';
  clubs;

  constructor(public http: HttpClient) {

  }

  getAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.generateURl()).forEach(
        res => {
          this.clubs = res;
          resolve(this.clubs);
        }
      ).then(value => value);
    })
  }

  generateURl() {
    return `${this.clubsUrl}.json`;
  }
}
