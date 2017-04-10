import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TweetCardComponent } from './tweet-card/tweet-card.component';

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
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
