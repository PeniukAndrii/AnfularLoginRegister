import {Injectable} from '@angular/core';
import {ILogin} from '../interface/i-login';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  login: ILogin[];

  constructor() {
    this.login = [{login: 'max', password: 123}, {login: 'and123', password: 234}, {login: 'and123', password: 'and123'}];
  }
}
