import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AngularFire ]
})
export class LoginComponent implements OnInit {
  
  errorMessage: String;

  constructor(private ngFire: AngularFire) { 
    ngFire.auth.subscribe(auth => {
      if (auth) {
        console.log('user signed in');
        // router.navigate(['']);
      }
    })
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
