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
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (u: any) => u.email === this.email && u.password === this.password
    )
  
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.router.navigate(['/profile']);
    } else {
      this.error = 'Invalid email or password';
    }
  }

}
