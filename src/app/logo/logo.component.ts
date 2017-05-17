import { Component, NgModule, Input, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
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
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  animations: [translateY(500, 200, 0)]
})
export class LogoComponent {
  shouldToggle:string = 'false';
  constructor() { }

  ngAfterViewInit() {
        this.toggle();
  }

  toggle() {
   if (this.shouldToggle == 'false') {
          this.shouldToggle = 'true';
   } else {
          this.shouldToggle = 'false';
   }
 }

}
