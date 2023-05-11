import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  likes : number = 0;
  likeBool : boolean = false;

  constructor() { }

  ngOnInit() {
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
