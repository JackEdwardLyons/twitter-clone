import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AngularFire ]
})
export class LoginComponent implements OnInit {
  private router: Router;
  errorMessage: String;
  user = {};

  constructor(public ngFire: AngularFire) { 
    ngFire.auth.subscribe(auth => {
      if (auth) {
        // logged in
        this.user = auth;
      } else {
        // not logged in
        this.user = {};
      }
    });
  }
  
  ngOnInit() {
  }

  // Login function
  login(form) {
    this.ngFire.auth.login({
      email: form.value.email,
      password: form.value.password
    },{
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }).catch(error => this.errorMessage = error.message);;
    form.reset();
  }

  // Signup function
  signup(form) {
    this.ngFire.auth.createUser({
      email: form.value.email,
      password: form.value.password
    }).catch(error => this.errorMessage = error.message);
    form.reset();
  }

}
