/*
Title: home.component.ts
Author: William Egge
Date: 2 July 2023
Description: The home component ts file for gpa-calculator-app1 app.
*/

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  transcriptEntry: ITranscript;
  selectableGrades: Array<string> = [
    'A',
    'A-',
    'B+',
    'B',
    'B-',
    'C+',
    'C',
    'C-',
    'D+',
    'D',
    'D-',
    'F',
  ];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;

  constructor() {
    this.transcriptEntry = {} as ITranscript;
  }

  ngOnInit(): void {}

  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;
  }

  calculateResults() {
    let gpaSum: number = 0;

    for (let entry of this.transcriptEntries) {
      switch (entry.grade) {
        case 'A':
          gpaSum += 4;
          break;
        case 'A-':
          gpaSum += 3.7;
          break;
        case 'B+':
          gpaSum += 3.33;
          break;
        case 'B':
          gpaSum += 3;
          break;
        case 'B-':
          gpaSum += 2.7;
          break;
        case 'C+':
          gpaSum += 2.33;
          break;
        case 'C':
          gpaSum += 2;
          break;
        case 'C-':
          gpaSum += 1.7;
          break;
        case 'D+':
          gpaSum += 1.33;
          break;
        case 'D':
          gpaSum += 1;
          break;
        case 'D-':
          gpaSum += 0.7;
          break;
        default:
          gpaSum += 0;
          break;
      }
    }

    this.gpaTotal = gpaSum / this.transcriptEntries.length;
  }

  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}
