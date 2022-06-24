import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public userData: any;

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getUserDataFromService().subscribe(result => {
      this.userData = result
    });
  }

  public getUserDataFromService() {
    return this._userService.userData();
  }

}
