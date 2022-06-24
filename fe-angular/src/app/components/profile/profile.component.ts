import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public userData: any;
  public changeDataForm: FormGroup;

  constructor(private _userService: UserService,
              private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getUserDataFromService().subscribe(result => {
      this.userData = result;
      console.log(this.userData);
    });

    this.changeDataForm = this._formBuilder.group({
      email: ['', [Validators.email]],
      name: ['']
    });
  }

  public get validForm() {
    console.log(this.changeDataForm);
    return this.changeDataForm.valid;
  }

  public get invalidEmail() {
    const emailControl = this.changeDataForm.get('email');
    if (emailControl !== null) {
      if (emailControl.errors) {
        return emailControl.errors['email'] && emailControl.touched;
      }
    }
  }

  public getUserDataFromService() {
    return this._userService.userData();
  }
}
