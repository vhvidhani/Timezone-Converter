import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'time-converter';
  clock= '';
  //@ViewChild('clockValue' , {static:true}) clockValue: ElementRef;

  constructor()  {}

 

  updateTime() {
    const now=moment();
    const humanReadable= now.format('h:mm:ss A');
    this.clock=humanReadable;
  }

  ngOnInit() {
    setInterval(this.updateTime,1000);
    this.updateTime();
  }
  

}
