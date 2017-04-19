import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, FirebaseAuthState, AngularFire } from 'angularfire2';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.css']
})
export class TweetCardComponent implements OnInit {
  // Array<any>
  public cards: Array<any> = [1, 2, 3, 4, 5];
  // FirebaseListObservable with an any array
  public tweeets: FirebaseListObservable<any[]>;

  public user: FirebaseAuthState; 

  constructor(public ngFire: AngularFire) { 
    ngFire.auth.subscribe(auth => {
      if (auth) {
        // logged in
        this.user = auth;
      } else {
        // not logged in
        console.log(auth);
      }
    });
  }

  ngOnInit() { }

  addTweeet(field) {


    field.value = '';
  }

  removeTweeet() {

  }

  like() {

  }

}
