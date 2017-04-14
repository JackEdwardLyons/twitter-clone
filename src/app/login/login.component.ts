import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
// Import rxjs
import "rxjs/add/operator/filter";
import "rxjs/add/operator/first";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AngularFire ]
})
export class LoginComponent implements OnInit {
  private router: Router;
  public errorMessage: String;
  public formError: boolean = false;
  public user = {};
  public userName: String;

  @Output() 
  newUser = new EventEmitter();

  constructor(public ngFire: AngularFire) { 
    ngFire.auth.subscribe(auth => {
      if (auth) {
        // logged in
        this.user = auth;
        this.userName = auth.auth.email;
        this.returnUserName();
      } else {
        // not logged in
        this.user = {};
      }
    });
  }
  
  ngOnInit() {
  }

  returnUserName() {
    this.newUser.emit(this.userName);
  }

  

  // Email Signup
  signup(form) {
    this.ngFire.auth.createUser({
      email: form.value.email,
      password: form.value.password
    }).catch(error => {
      this.errorMessage = error.message
      this.formError = true;
    });
    console.log(this.user);
    this.formError = false;
    form.reset();
  }

  // Email Login
  login(form) {
    this.ngFire.auth.login({
      email: form.value.email,
      password: form.value.password
    },{
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }).catch(error => {
      this.errorMessage = error.message;
      this.formError = true;
    });
    console.log(this.user);
    this.formError = false;
    form.reset();
  }
  
  // Google Login
  authLogin(from: String) {
  this.ngFire.auth.login({
      provider: this._getProvider(from)
    });
    console.log(this.user);
    this.formError = false;
  }

  private _getProvider(from: String) {
  switch(from) {
      case 'facebook': return AuthProviders.Facebook;
      case 'google': return AuthProviders.Google;
    }
  }

  logout() {
    this.ngFire.auth
    // You only want unathenticated states:
    .filter((authState) => !authState)
    // You only want the first unathenticated state:
    .first()
    // You should now be able to navigate:
    .subscribe(() => console.log('logged out'));
    // The composed observable completes, so there's no need to unsubscribe.
    this.ngFire.auth.logout();
    this.newUser.emit(this.userName = '');
  }
 
  

}
