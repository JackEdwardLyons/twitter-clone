import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public loggedInUser: String;

  constructor(public ngFire: AngularFire) { }

  getUserName(event) {
    this.loggedInUser = event;
  }

  
}
