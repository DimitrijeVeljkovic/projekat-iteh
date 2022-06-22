import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../constants/app.constants';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public baseUrl = BASE_URL;

  constructor(private _http: HttpClient) { }

  public register(user: User) {
    return this._http.post(`${this.baseUrl}/register`, user);
  }
}
