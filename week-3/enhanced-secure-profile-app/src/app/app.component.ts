/**
	Title: app.component.ts
    Author: William Egge
    Date: 11 June 2023
    Description: The root component.
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  assignment: string = 'Exercise 2.3 - Data Binding';
}
