/**
	Title: signin.component.ts
    Author: William Egge
    Date: 11 June 2023
    Description: The signin component.
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isLogin: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  signIn() {
    this.isLogin = true;

    this.router.navigate(['/home'], { queryParams: { isLogin: this.isLogin }, skipLocationChange: true});
  }
}
