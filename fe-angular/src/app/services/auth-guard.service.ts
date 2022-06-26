import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _userService: UserService,
              private _router: Router) { }

  public canActivate(): boolean {
    if (!this._userService.getUser()) {
      this._router.navigate(['login']);
      return false;
    }
    return true;
  }
}
