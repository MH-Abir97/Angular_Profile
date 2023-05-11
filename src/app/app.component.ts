import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyProfile';
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
}
