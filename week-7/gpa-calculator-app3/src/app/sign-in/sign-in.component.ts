/*
Title: sign-in.component.ts
Author: William Egge
Date: 9 July 2023
Description: The sign in component ts file for gpa-calculator-app3 app.
*/

import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup;
  errorMessage: string;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private fb: FormBuilder,
    private signinService: SignInService
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
     studentId: '',
    });
  }

  onSubmit() {
    const formValue = this.signinForm.value;
    const studentId = parseInt(formValue.studentId);
    console.log('Student ID:', studentId); // Debugging line

    if (this.signinService.validate(studentId)) {
      document.cookie = `session_user=${studentId.toString()}; SameSite=None; Secure`;
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Invalid student ID. Please try again.';
    }
  }

}
