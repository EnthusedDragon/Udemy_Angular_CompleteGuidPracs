import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  buttonClicks = [];
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick()
  {
    //this.buttonClicks.push(this.buttonClicks.length + 1);
    this.buttonClicks.push(new Date());
    this.show = !this.show;
  }
}
