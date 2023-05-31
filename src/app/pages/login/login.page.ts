import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email?: string;
  password?: string;
  error?: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  userRegister(){
    this.router.navigate(['/register']);
  }

  login() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData.email === this.email && userData.password === this.password) {
      localStorage.setItem('currentUser', JSON.stringify(userData));
      this.router.navigate(['/profile']);
    } else {
      this.error = 'Invalid email or password';
    }
  }

}
