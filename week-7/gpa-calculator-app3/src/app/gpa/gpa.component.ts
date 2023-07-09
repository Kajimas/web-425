/*
Title: gpa.component.ts
Author: William Egge
Date: 2 July 2023
Description: The gpa component ts file for gpa-calculator-app2 app.
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss'],
})
export class GpaComponent implements OnInit {
  @Input() gpaTotal: number;

  constructor() {}

  ngOnInit(): void {}
}
