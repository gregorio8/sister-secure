import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userData: any = {};
  showPassword: boolean = false;

  constructor(private registerService: RegisterService) {
    this.userData = this.registerService.userData;
  }

  ngOnInit() {
    console.log('aaaa', this.userData);

  }

  togglePassword(event: Event) {
    event.preventDefault();
    event.stopPropagation(); 
    this.showPassword = !this.showPassword;
  }

}
