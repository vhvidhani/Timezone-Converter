import { Component, OnInit ViewChild, ElementRef } from '@angular/core';

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
    clock=humanReadable;
  }

  ngOnInit() {
    setInterval(updateTime,1000);
    updateTime();
  }
  

}
