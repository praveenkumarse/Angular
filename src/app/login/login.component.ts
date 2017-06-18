import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlobalService } from './../services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private _fb: FormBuilder, private global: GlobalService) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      name: [''],
      password: ['']
    })
  }
  private login() {
    let url = this.global.apiUrl + "login";

    this.global.postRequest(url, this.loginForm)
      .subscribe(res => {
        console.log("login data", res)
      })
  }
}
