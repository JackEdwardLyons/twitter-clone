import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { AngularFireModule } from 'angularfire2';
import { RouterModule, Routes } from '@angular/router'; 

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TweetCardComponent } from './tweet-card/tweet-card.component';

// Initialize Firebase
export const fireBaseConfig = {
    apiKey: "AIzaSyD2zLFmxoKPoDb-Q3KE7O3KTPMGfYpYReg",
    authDomain: "twitter-clone-d11ed.firebaseapp.com",
    databaseURL: "https://twitter-clone-d11ed.firebaseio.com",
    projectId: "twitter-clone-d11ed",
    storageBucket: "twitter-clone-d11ed.appspot.com",
    messagingSenderId: "933366935947"
};

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TweetCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(fireBaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
