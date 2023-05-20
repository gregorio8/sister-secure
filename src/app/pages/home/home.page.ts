import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  likes : number = 0;
  likeBool : boolean = false;
  message: any;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getJavaTest().subscribe( response => {
     this.message = response;
    });
  }

  like(){
    if(this.likeBool){
      this.likes--;
      this.likeBool = false;
    } else {
      this.likes++;
      this.likeBool = true;
    }
  }

  removeLike(){

  }

}
