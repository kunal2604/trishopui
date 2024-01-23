import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) => {
  const userAuthService = inject(UserAuthService);
  const router = inject(Router);
  
  if(userAuthService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
