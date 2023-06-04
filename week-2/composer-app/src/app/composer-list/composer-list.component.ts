/**
	Title: composer-list.component.ts
    Author: William Egge
    Date: 4 June 2023
    Description: Composer list component (Composer list page)
*/

import { Component, OnInit } from '@angular/core';

class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})

export class ComposerListComponent implements OnInit {
  composers: Composer[];

  constructor() {
    this.composers = [
      new Composer('Ludwig van Beethoven', 'Classical'),
      new Composer('Wolfgang Amadeus Mozart', 'Classical'),
      new Composer('Johann Sebastian Bach', 'Baroque'),
      new Composer('Franz Schubert', 'Classical'),
      new Composer('Johannes Brahms', 'Romantic'),
    ];
  }

  ngOnInit(): void {
  }
}


