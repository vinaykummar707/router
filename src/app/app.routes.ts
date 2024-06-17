import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';
import { userGuard } from './user.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [userGuard],
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [userGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
