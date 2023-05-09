import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {
  constructor(private router: Router) {}

  // Check if user is authenticated
  canActivate() {
    if (localStorage.getItem('currentUser')) {
      // User is authenticated
      return true;
    }

    // User is not authenticated, redirect to login page
    this.router.navigate(['/login']);
    return false;
  }

  // Login function
  login(email: string, password: string) {
    // TODO: Implement authentication logic
  }

  // Logout function
  logout() {
    // Remove user from local storage
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return !!currentUser.email;
  }
}