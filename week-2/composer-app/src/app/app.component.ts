/**
	Title: app.component.ts
    Author: William Egge
    Date: 4 June 2023
    Description: The root component.
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'composer-app';
}
