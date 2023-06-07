import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public camuflado = { title: 'Modo camuflado', icon: 'eye-off' };

  public appPages = [
    { title: 'Meu perfil', url: 'profile', icon: 'person' },
    { title: 'Excluir a conta', url: '/', icon: 'trash' },
    { title: 'Configurações', url: '/', icon: 'settings' },
    { title: 'Sobre', url: '/', icon: 'information-circle' },
  ];

  constructor(private router: Router) {

  }

  logout() {
    this.clearInputFields();
    this.router.navigate(['/login']);
  }

  clearInputFields() {
    const inputFields = document.querySelectorAll('input');
    inputFields.forEach(input => {
      input.value = '';
    });
  }

  deleteAccount() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // find index of current user in users array
    const index = users.findIndex((u: any) => u.email === currentUser.email && u.password === currentUser.password);
    
    if (index !== -1) {
      // remove user from users array
      users.splice(index, 1);
      localStorage.setItem('users', JSON.stringify(users));
      
      // remove current user from local storage
      localStorage.removeItem('currentUser');
      
      // navigate to login page
      this.router.navigate(['/login']);
    }
  }

}
