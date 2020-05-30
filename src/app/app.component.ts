import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  constructor()  {
    //console.log(this.clockValue);
  }

  ngOnInit() {
    setInterval(this.updateTime,1000);
    this.updateTime();
  }
 
  updateTime() {
    const now=moment();
    const humanReadable= now.format('h:mm:ss A');
    console.log(humanReadable);
    //this.clockValue.nativeElement.value=humanReadable;
    this.clock=humanReadable;
  }
 
  
  
}
