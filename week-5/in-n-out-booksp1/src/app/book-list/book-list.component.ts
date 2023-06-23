/*
Title: book-list.component.ts
Author: William Egge
Date: 22 June 2023
Description: The book list component ts file for in-n-out-books app.
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
