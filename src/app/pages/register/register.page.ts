import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name?: string;
  cpf?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    const user = {
      name: this.name,
      cpf: String(this.cpf),
      email: this.email,
      password: this.password
    };

    if (!this.name || !this.cpf || !this.email || !this.password || !this.confirmPassword) {
      return;
    }
  
    if (this.password !== this.confirmPassword) {
      return;
    }
  
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    
    this.router.navigate(['/login']);
  }

  back() {
    this.router.navigate(['/login']);
  }

}
