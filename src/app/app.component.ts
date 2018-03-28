import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'AngularLocalization';
  now: Date = new Date();
  minutes: number = 0;
  gender: string = "o";
}