import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Materialize
import { MaterializeModule } from 'angular2-materialize';
// Firebase
import { AngularFireModule, AuthMethods, AuthProviders  } from 'angularfire2';
// Routes
import { routes } from './app.router';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TweetCardComponent } from './tweet-card/tweet-card.component';
import { MessageComponent } from './message/message.component';

// Initialize Firebase
export const fireBaseConfig = {
    apiKey: "AIzaSyD2zLFmxoKPoDb-Q3KE7O3KTPMGfYpYReg",
    authDomain: "twitter-clone-d11ed.firebaseapp.com",
    databaseURL: "https://twitter-clone-d11ed.firebaseio.com",
    projectId: "twitter-clone-d11ed",
    storageBucket: "twitter-clone-d11ed.appspot.com",
    messagingSenderId: "933366935947"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TweetCardComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    routes,
    AngularFireModule.initializeApp(fireBaseConfig, {
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  ],
  exports: [ BrowserModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
