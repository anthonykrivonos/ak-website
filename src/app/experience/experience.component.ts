import { Component, OnInit, ViewChild } from '@angular/core';
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
      selector: 'app-experience',
      templateUrl: './experience.component.html',
      styleUrls: ['./experience.component.scss'],
      animations: [translateY(900, 300, 0)]
})
export class ExperienceComponent {
      @ViewChild('experience') experience;
      items:Array<any>;

      scrollimateOptions: any = {
                  experienceComponentScroll: {
                        currentState: "false",
                        states: [{
                              method: "percentTotal",
                              value: 95,
                              state: "true",
                        },
                        {
                              method: "default",
                              state: "false"
                        }
                  ]
            },
      }

      constructor (public db: AngularFireDatabase) {}

      ngOnInit():void {
            this.db.list('/experience',  {
                  query: {
                        orderByChild: "period"
                  }
            }).take(1).subscribe((items) => {
                  this.items = items;
            });
      }
}
