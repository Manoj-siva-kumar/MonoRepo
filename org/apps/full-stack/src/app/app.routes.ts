import { Route } from '@angular/router';
import { Login } from './cd login';
import { App } from './app';

export const appRoutes: Route[] = [
    {path: '', component:App},
    { path:'login', component:Login}
];
