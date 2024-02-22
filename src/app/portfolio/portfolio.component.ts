import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  flag:boolean = true;
  modelImg:string = '';
  srcs: string[] = [
    'assets/images/poert1.png',
    'assets/images/port2.png',
    'assets/images/port3.png',
    'assets/images/poert1.png',
    'assets/images/port2.png',
    'assets/images/port3.png',

  ]

  hideModel( element: EventTarget | null, img: HTMLImageElement):void {
    if(element == img ) return;

    this.flag = true;
  }

}
