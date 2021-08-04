import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  endPoint = '../assets/matchDatabase/matches';
  items;

  constructor(public http: HttpClient) {

  }

  getAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.generateURl()).forEach(
        res => {
          resolve(res);
        }
      ).then(value => value);
    })
  }

  generateURl() {
    return `${this.endPoint}.json`;
  }
}

