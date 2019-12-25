import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Md5 } from "ts-md5/dist/md5";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;
  account: string
  name: string
  email: string
  phone: string
  password: string

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });
  }

  finish(): void {
    let params = new FormData()

    if (/^(\+\d\d){0,1}(\d{11})$/.test(this.account)) {
      this.phone = this.account
    }
    if (/^[a-z0-9_-]+@[a-z0-9]+\.com$/i.test(this.account)) {
      this.email = this.account
    }

    params.append('email', this.email)
    params.append('name', this.name)
    params.append('password', Md5.hashStr(this.password).toString())
    params.append('phone', this.phone)
  }

}
