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
            const el:HTMLElement = document.getElementsByClassName('imgurl')[this.idx] as HTMLElement;
            el.style.background = "url('" + this.src + "')";
            el.style.backgroundRepeat = "no-repeat";
            el.style.backgroundPosition = "center";
            el.style.backgroundSize = "cover";

            const modal:HTMLElement = document.getElementsByClassName('modal')[this.idx] as HTMLElement;
            const close:HTMLElement = document.getElementsByClassName("close")[this.idx] as HTMLElement;

            el.onclick = () => {
                  window.open(this.href);
                  //modal.style.display = "block";
            };
            // window.onclick = (event) => {
            //     if (event.target == modal) {
            //         modal.style.display = "none";
            //     }
            // }
            // close.onclick = () => {
            //       modal.style.display = "none";
            // }
      }
}
