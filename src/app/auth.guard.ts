import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (localStorage.getItem('isUserLogged')) {
    console.log('yes you can use home page');
    return true;
  } else {
    console.log('you will be redirected');
    router.navigate(['/login']);
    return false;
  }
};
