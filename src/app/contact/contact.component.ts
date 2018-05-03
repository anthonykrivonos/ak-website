import { Component, NgModule, Input, AfterViewChecked, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import {
      trigger,
      state,
      style,
      animate,
      transition,
      keyframes
} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { transformY } from './../../animations/transformY';

@Component({
      selector: 'app-contact',
      templateUrl: './contact.component.html',
      styleUrls: ['./contact.component.scss'],
      animations: [transformY(200)]
})
export class ContactComponent implements OnInit {
      @ViewChild('scrollMe') private scrollCon: ElementRef;

      private ENDPOINTS:any = {
            AUTH: "https://anthonykrivonos.herokuapp.com/auth",
            CONTACT: "https://anthonykrivonos.herokuapp.com/contact"
      }

      public shouldToggle:string = 'false';
      public toggleText:string = 'Contact Me';

      public isValid:boolean = false;

      private open:any;
      private done:any;

      private disabled:string = "#757575";
      private enabled:string = "#515151";

      private itemObservable:any;

      constructor(private http:Http, private db:AngularFireDatabase) {
            var date = new Date();
            this.itemObservable = db.object('/mail/' + date);
      }

      ngOnInit() {

      }

      // UI Methods
      toggle() {
            this.toggleText = `Contact Me`;
            if (this.shouldToggle == 'false') {
                  this.shouldToggle = 'true';
                  document.getElementById("fields").style.display = "inline-block";
                  this.open = window.setInterval(() => {
                        this.validateSubmit();
                  }, 250);
            } else {
                  this.shouldToggle = 'false';
                  clearInterval(this.open);
                  this.done = window.setTimeout(() => {
                        document.getElementById("fields").style.display = "none";
                  }, 1);
            }
            this.done = window.setInterval(() => {
                  window.scrollTo(0,document.body.scrollHeight);
            }, 1);
            window.setTimeout(()=>{clearInterval(this.done)}, 500);
      }

      scrollToBottom(): void {
            try {
                  this.scrollCon.nativeElement.scrollTop = this.scrollCon.nativeElement.scrollHeight;
            } catch(err) { }
      }

      // Mail Methods
      checkFields():boolean {
            this.isValid = ((<HTMLInputElement>document.getElementsByName("name")[0]).value != ""
            && this.validateEmail((<HTMLInputElement>document.getElementsByName("email")[0]).value)
            && (<HTMLInputElement>document.getElementsByName("subject")[0]).value != "Subject"
            && (<HTMLInputElement>document.getElementById("contentblock")).value != "");
            return this.isValid;
      }

      clearFields():void {
            (<HTMLInputElement>document.getElementsByName("name")[0]).value = "";
            (<HTMLInputElement>document.getElementsByName("email")[0]).value = "";
            (<HTMLSelectElement>document.getElementsByName("subject")[0]).selectedIndex = 0;
            (<HTMLInputElement>document.getElementById("contentblock")).value = "";
      }

      validateSubmit() {
            var submitButton = document.getElementsByClassName("send")[0];
            if (this.checkFields()) {
                  (<HTMLButtonElement>submitButton).style.borderColor = this.enabled;
                  (<HTMLButtonElement>submitButton).style.color = this.enabled;
                  (<HTMLButtonElement>submitButton).disabled = false;
                  (<HTMLButtonElement>submitButton).style.cursor = "pointer";
            } else {
                  (<HTMLButtonElement>submitButton).style.borderColor = this.disabled;
                  (<HTMLButtonElement>submitButton).style.color = this.disabled;
                  (<HTMLButtonElement>submitButton).disabled = true;
                  (<HTMLButtonElement>submitButton).style.cursor = "default";
            }
      }

      validateEmail(email):boolean {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
      }

      compileFields():any {
            return {
                  name: (<HTMLInputElement>document.getElementsByName("name")[0]).value,
                  email: (<HTMLInputElement>document.getElementsByName("email")[0]).value,
                  subject: (<HTMLInputElement>document.getElementsByName("subject")[0]).value,
                  body: (<HTMLInputElement>document.getElementById("contentblock")).value
            };
      }

      sendMail() {
            let uid = { uid: `${Date.now()}` };
            let fields = this.compileFields();

            let headers = new Headers({'Content-Type': 'application/json'});
            let options = new RequestOptions({headers});

            this.http.post(this.ENDPOINTS.AUTH, JSON.stringify(uid), options).map((res:Response) => res.json()).take(1).subscribe((res) => {
                  if (res) {
                        console.log(JSON.stringify(res));
                        headers = new Headers({'Content-Type': 'application/json', 'x-access-token': res["auth-token"]});
                        options = new RequestOptions({headers});
                        this.http.post(this.ENDPOINTS.CONTACT, JSON.stringify(fields), options).take(1).subscribe((res) => {
                              if (res) {
                                    this.itemObservable.set(fields);
                                    this.toggle();
                                    this.toggleText = `Sent!`;
                                    this.clearFields();
                              } else {
                                    console.error(`Error sending mail.`);
                              }
                        });
                  } else {
                        console.error(`Error authenticating sender.`);
                  }
            });
      }
}
