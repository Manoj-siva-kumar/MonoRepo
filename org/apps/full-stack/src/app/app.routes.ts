import { Route } from '@angular/router';
import { Login } from './cd login';
import { App } from './app';
import { SignupForm } from './signup-form';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' }, // default to signup
  { path: 'signup', component: SignupForm },
  { path: 'login', component: Login },
];

