import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  /*
  Other options for defining pass-in values:
  text: string | undefined; Indicates it can possibly be undefined.
  text!: string; Add definite assignment assertion. Only do this if the pass-in is required.
  
  You can also put the default value in the constructor. this.text = '';
   */
  @Input() text: string = ''; // default value is the blank string.
  @Input() color: string = '';

  constructor() {}

  ngOnInit(): void {}
}
