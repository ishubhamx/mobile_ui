import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'app';
  selectedValue = '';
  myColor = '#6c5ce7';
  items = [
    { value: '0', view: 'zero' },
    { value: '1', view: 'one' },
    { value: '2', view: 'Two' }
  ];
  reason = '';
  ngOnInit(): void {}
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  toggleSideNav($event) {
    this.sidenav.open();
  }
  scrollHandler($event) {
    console.log($event);
  }
}
