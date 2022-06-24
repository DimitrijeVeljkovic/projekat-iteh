import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseUrl = BASE_URL;

  constructor(private _http: HttpClient) { }

  public getUser() {
    return localStorage.getItem('user');
  }

  public getUserId() {
    return JSON.parse(localStorage.getItem('user') || '{}').userId;
  }

  public userData() {
    return this._http.get(`${this.baseUrl}/users/${this.getUserId()}`);
  }
}
