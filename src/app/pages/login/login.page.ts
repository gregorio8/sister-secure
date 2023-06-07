import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/components/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email?: string;
  password?: string;
  error?: string;

  constructor(private router: Router, private toastService: ToastService) { }

  ngOnInit() {
  }

  userRegister(){
    this.router.navigate(['/register']);
  }

  login() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (userData.email === this.email && userData.password === this.password) {
      localStorage.setItem('currentUser', JSON.stringify(userData));
      this.router.navigate(['/home']);
    } else {
      this.error = 'Invalid email or password';
      this.toastService.presentToast('bottom', 'Credenciais inválidas!', 2000);
    }
  }

}
