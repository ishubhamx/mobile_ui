import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.scss']
})
export class HorizontalScrollComponent implements OnInit {
  @ViewChild('scrollable') horizontalDiv: ElementRef;
  constructor() {}

  ngOnInit() {}
  scrollRight() {
    this.horizontalDiv.nativeElement.scrollTo({
      left: this.horizontalDiv.nativeElement.scrollLeft + 500,
      behavior: 'smooth'
    });
  }
  scrollLeft() {
    this.horizontalDiv.nativeElement.scrollTo({
      left: this.horizontalDiv.nativeElement.scrollLeft - 500,
      behavior: 'smooth'
    });
  }
}
