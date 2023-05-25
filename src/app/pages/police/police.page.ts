import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-police',
  templateUrl: './police.page.html',
  styleUrls: ['./police.page.scss'],
})
export class PolicePage implements OnInit {

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  timer: number = 0;
  intervalId: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.timer++;
    }, 1000);
  }

  timeFormat(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  padZero(number: number): string {
    return number.toString().padStart(2, '0');
  }

  backHome() {
    clearInterval(this.intervalId);
    this.timer = 0;
    this.router.navigate(['/home'])
  }

}
