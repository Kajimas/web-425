/**
	Title: app.component.ts
    Author: William Egge
    Date: 2 June 2023
    Description: this is the app component ts file. it serves as the root component for the application.
 */


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
