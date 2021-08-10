import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage-angular";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  newStorage: Storage | null = null;

  constructor(public storage: Storage) {
    this.init().then(value => value);
  }

  async init() {
    const storage = await this.storage.create();
    this.newStorage = storage;
  }

  setValue(key: string, value: any): Promise<any> {
    return this.newStorage?.set(key, value);
  }

  getValue(key): Promise<any> {
    return this.newStorage.get(key);
  }

  setObject(key, obj): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        obj = JSON.stringify(obj);
      } catch (e) {
        return reject(e);
      }
      this.newStorage.set(key, obj).then(
        () => {
          resolve(true);
        }
      );
    });
  }

  getObject(key): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getValue(key).then(value => {
        value = JSON.parse(value);
        resolve(value);
      });
    }).then(value => value);
  }
}
