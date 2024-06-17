import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  users: any[] = [];
  activeUser: any;

  constructor(private storageService: StorageService) {}

  login(user: any) {
    this.storageService.setItem('isUserLogged', 'true');
    this.setCurrentActiveUser(user);
    if (this.storageService.getItem('users')) {
      this.users = JSON.parse(this.storageService.getItem('users') as any);
      this.storageService.setItem(
        'users',
        JSON.stringify([...this.users, user])
      );
    } else {
      this.users.push(user);
      this.storageService.setItem('users', JSON.stringify(this.users));
    }
  }

  signup() {}

  logout() {
    // this.storageService.setItem('isUserLogged', 'false');
    // this.storageService.setItem('users', JSON.stringify([]));
    // this.storageService.setItem('activeUser', '');
    this.storageService.clear();
  }

  isUserLoggedIn() {
    return this.storageService.getItem('isUserLogged');
  }

  getCurrentActiveUser() {
    return this.storageService.getItem('activeUser');
  }

  setCurrentActiveUser(user: any) {
    this.activeUser = user;
    this.storageService.setItem('activeUser', JSON.stringify(user));
  }

  getAllUsers() {}
}
