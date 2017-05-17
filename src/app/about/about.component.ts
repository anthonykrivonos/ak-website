import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
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
import { translateX } from './../../animations/translateX';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [translateY(500, 600, 0), translateX(500, -400, 0)]
})
export class AboutComponent {
  gitHubLink: String = "https://github.com/anthonykrivonos";
  linkedInLink: String = "https://www.linkedin.com/in/anthonykrivonos/";

  shouldXToggle:string = 'false';
  shouldYToggle:string = 'false';

  about: FirebaseObjectObservable<any>;
  constructor (db: AngularFireDatabase) {
        this.about = db.object('/about');
  }

  ngAfterViewInit() {
        this.toggle('X');
        this.toggle('Y');
  }

  toggle(toggle:string) {
     if (toggle == 'X') {
           if (this.shouldXToggle == 'false') {
                 this.shouldXToggle = 'true';
          } else {
                 this.shouldXToggle = 'false';
          }
     } else {
          if (this.shouldYToggle == 'false') {
                this.shouldYToggle = 'true';
         } else {
                this.shouldYToggle = 'false';
         }
    }

  }
}
