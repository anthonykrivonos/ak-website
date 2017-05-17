import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proficiency',
  templateUrl: './proficiency.component.html',
  styleUrls: ['./proficiency.component.scss']
})
export class ProficiencyComponent implements OnInit {
      @Input() body:string;
      @Input() src:string;
      @Input() title:string;
      @Input() idx:string;
      constructor(){}
      ngOnInit() {}
}
