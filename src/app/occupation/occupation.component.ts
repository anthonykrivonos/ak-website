import { Component, OnInit, Input } from '@angular/core';
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

import { translateX } from './../../animations/translateX';

@Component({
      selector: 'app-occupation',
      templateUrl: './occupation.component.html',
      styleUrls: ['./occupation.component.scss'],
      animations: [translateX(900, 300, 0)]
})
export class OccupationComponent {
      @Input('idx') idx:number;
      @Input('occupation') occupation:string;
      @Input('company') company:string;
      @Input('period') period:string;
      @Input('body') body:string;
      @Input('src') src:string;

      scrollimateOptions: any = {
                  occupationComponentScroll: {
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
      }
}
