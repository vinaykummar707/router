import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

export const userGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthenticationService);
  console.log(authService.getCurrentActiveUser());

  if (authService.isUserLoggedIn() && authService.getCurrentActiveUser()) {
    router.navigate(['/home']);
    return false;
  } else {
    return true;
  }
};
