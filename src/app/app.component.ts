import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // The tag you're gonna use to embed your component. This one is embedded into index.html.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Toto Task Tracker';
}
