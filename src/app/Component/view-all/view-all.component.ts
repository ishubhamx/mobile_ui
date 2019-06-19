import { Component, OnInit, ViewChild } from "@angular/core";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { Observable, BehaviorSubject } from "rxjs";
import { map, tap, scan, mergeMap, throttleTime } from "rxjs/operators";
@Component({
  selector: "app-view-all",
  templateUrl: "./view-all.component.html",
  styleUrls: ["./view-all.component.scss"]
})
export class ViewAllComponent implements OnInit {
  items = [];
  ngOnInit() {
    for (let i = 0; i < 100; i++) {
      this.items.push("some item" + i);
    }
  }
}
