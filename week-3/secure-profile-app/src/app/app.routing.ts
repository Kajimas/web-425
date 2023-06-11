/**
	Title: app.routing.ts
    Author: William Egge
    Date: 11 June 2023
    Description: The app routing file.
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  }
];
