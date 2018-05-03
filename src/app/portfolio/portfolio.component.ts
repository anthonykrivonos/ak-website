import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { translateY } from './../../animations/translateY';

@Component({
      selector: 'app-portfolio',
      templateUrl: './portfolio.component.html',
      styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
      items:Array<any>;

      constructor (public db: AngularFireDatabase) {}

      ngOnInit():void {
            this.db.list('/portfolio',  {
                  query: {
                        orderByChild: "title"
                  }
            }).take(1).subscribe((items) => this.items = items);
      }
}
