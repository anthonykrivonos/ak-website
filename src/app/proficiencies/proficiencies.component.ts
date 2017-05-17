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
  selector: 'app-proficiencies',
  templateUrl: './proficiencies.component.html',
  styleUrls: ['./proficiencies.component.scss'],
  animations: [translateY(900, 300, 0)]
})
export class ProficienciesComponent {
      @ViewChild('proficiencies') proficiencies;
      items: FirebaseListObservable<any[]>;

      scrollimateOptions: any = {
            proficiencyComponentScroll: {
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

      constructor (db: AngularFireDatabase) {
            this.items = db.list('/proficiencies',  {
              query: {
                orderByKey: true
              }
            });
      }
}
