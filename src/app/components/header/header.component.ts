import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Toto Task Tracker';
  constructor() {}

  ngOnInit(): void {
    // will run code when the component loads.
  }
}
