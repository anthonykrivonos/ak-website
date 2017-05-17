import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
      resume: FirebaseObjectObservable<any>;
      resumeLink: string;
      constructor (db: AngularFireDatabase) {
            this.resume = db.object('/resume', { preserveSnapshot: true });
            this.resume.subscribe(snapshot => this.resumeLink = snapshot.val());
      }
      ngOnInit() {}

      loadResume(): void {
            var focusWindow = window.open(this.resumeLink);
            focusWindow.focus();
      }
}
