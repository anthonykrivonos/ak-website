import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  showLoading:boolean = false;
  LOAD:number = 1000;

  constructor() { }

  ngOnInit() {
       setTimeout(()=>{
             this.showLoading = true;
       }, this.LOAD);
       setTimeout(()=>{
             document.getElementById("body").style.zIndex = "-1";
       }, this.LOAD + 500);
  }

}
