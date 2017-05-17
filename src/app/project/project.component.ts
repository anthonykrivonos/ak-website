import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
      @Input() href:string;
      @Input() src:string;
      @Input() title:string;
      @Input() idx:string;

      constructor() { }

      ngOnInit() {
            const el = document.getElementsByClassName('imgurl')[this.idx];
            el.style.background = "url('" + this.src + "')";
            el.style.backgroundRepeat = "no-repeat";
            el.style.backgroundPosition = "center";
            el.style.backgroundSize = "cover";
            el.onclick = () => {
                  window.open(this.href);
            };
      }
}
