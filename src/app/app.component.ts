import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyDZOKEkyreaxZgUv246UuAZl7zxLqCI7wA',
      authDomain: 'ng-recipe-book-9f137.firebaseapp.com',
      databaseURL: "https://ng-recipe-book-9f137.firebaseio.com",
      projectId: "ng-recipe-book-9f137",
      storageBucket: "ng-recipe-book-9f137.appspot.com",
      messagingSenderId: "389221242965"
    });
  }



}
