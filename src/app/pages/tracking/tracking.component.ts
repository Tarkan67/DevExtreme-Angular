import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {
   markerUrl = 'https://snipboard.io/9gAE30.jpg';
   markers = [{
    location: [40.755833, -73.986389],
    tooltip: {
      isShown: false,
      text: 'Times Square',
    },
  }, {
    location: '40.7825, -73.966111',
    tooltip: {
      isShown: false,
      text: 'Central Park',
    },
  }, {
    location: {
      lat: 40.753889,
      lng: -73.981389,
    },
    tooltip: {
      isShown: false,
      text: 'Fifth Avenue',
    },
  }, {
    location: {
      lat: 43.753889,
      lng: -72.981389,
    },
    tooltip: {
      isShown: false,
      text: 'Brooklyn Bridge',
    },
  },{
     location: {
       lat: 42.753889,
       lng: -71.981389,
     },
     tooltip: {
       isShown: false,
       text: 'Brooklyn Bridge',
     },
   }
   ];


  constructor() { }

  ngOnInit(): void {
  }

}
