import { Component, ViewChild, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
      LOAD:number = 1000;

      items: FirebaseListObservable<any[]>;

      constructor(db: AngularFireDatabase) {
            this.items = db.list('/items');
      }

      ngOnInit() {
            this.loadWebpage();
      }

      loadWebpage():void {
            document.body.style.overflow = "hidden";
            setTimeout(()=>document.body.style.overflow = "auto", this.LOAD + 500);
      }
}
