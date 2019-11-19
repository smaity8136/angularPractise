import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-subscribe',
  templateUrl: './player-subscribe.component.html',
  styleUrls: ['./player-subscribe.component.css']
})
export class PlayerSubscribeComponent implements OnInit {

  players = ["Lebron james","messi"," Manny"]

  constructor() { }

  ngOnInit() {
  }

}
