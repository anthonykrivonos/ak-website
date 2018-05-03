import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { translateY } from './../../animations/translateY';

@Component({
      selector: 'app-proficiencies',
      templateUrl: './proficiencies.component.html',
      styleUrls: ['./proficiencies.component.scss']
})
export class ProficienciesComponent {
      @ViewChild('proficiencies') proficiencies;
      items:Array<any>;

      constructor (public db: AngularFireDatabase) {}

      ngOnInit():void {
            this.db.list('/proficiencies',  {
                  query: {
                        orderByChild: "title"
                  }
            }).take(1).subscribe((items) => {
                  this.items = items;
            });
      }
}
