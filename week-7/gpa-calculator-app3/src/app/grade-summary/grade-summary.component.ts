/*
Title: grade-summary.component.ts
Author: William Egge
Date: 2 July 2023
Description: The grade summary component ts file for gpa-calculator-app2 app.
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.scss'],
})
export class GradeSummaryComponent implements OnInit {
  @Input() grade: string;
  @Input() course: string;

  constructor() {}

  ngOnInit(): void {}
}
