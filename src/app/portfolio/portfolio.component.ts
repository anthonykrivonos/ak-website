import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { translateY } from './../../animations/translateY';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [translateY(900, 600, 0)]
})
export class PortfolioComponent {
      items: FirebaseListObservable<any[]>;

      scrollimateOptions2: any = {
            portfolioComponentScroll: {
                  currentState: "false",
                        states: [{
                              method: "percentTotal",
                              value: 10,
                              state: "true",
                        },
                        {
                              method: "default",
                              state: "false"
                        }
                  ]
            },
      }

      constructor (db: AngularFireDatabase) {
            this.items = db.list('/portfolio',  {
              query: {
                orderByKey: true
              }
            });
      }
}
