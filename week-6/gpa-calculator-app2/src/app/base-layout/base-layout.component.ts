/*
Title: base-layout.component.ts
Author: William Egge
Date: 2 July 2023
Description: The base layout component ts file for gpa-calculator-app2 app.
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor() {
    this.assignment = 'Assignment 6.4 - Input Properties';
  }

  ngOnInit(): void {}
}
