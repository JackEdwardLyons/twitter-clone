import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.css']
})
export class TweetCardComponent implements OnInit {

  public cards: Array<any> = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() { }

}
