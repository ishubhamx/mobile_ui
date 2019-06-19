import { Component, OnInit, ViewChild, Output,EventEmitter } from "@angular/core";
import { MatSidenav } from "@angular/material";


@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  @ViewChild("sidenav") sidenav: MatSidenav;
  @Output() navAction = new EventEmitter();
  constructor() {}
  value = "";
  ngOnInit() {}

  navClicked() {
    this.navAction.emit("true");
  }
}
