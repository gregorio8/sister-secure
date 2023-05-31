import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuardianService } from './guardian.service';

@Component({
  selector: 'app-guardian',
  templateUrl: './guardian.page.html',
  styleUrls: ['./guardian.page.scss'],
})
export class GuardianPage implements OnInit {

  name?: string;
  phone?: number;
  guardians: any[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private guardianService : GuardianService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.phone = params['phone'];
    });
    this.setGuardians();
  }

  setGuardians(){
    this.guardians = this.guardianService.getGuardians();
  }

  goAddGuardian() {
    this.router.navigate(['/add-guardian']);
  }

}
