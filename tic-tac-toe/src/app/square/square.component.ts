import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() value :  'O' | 'X';
  @Input() isDisabled:  boolean;

  constructor() {
    this.value = 'O';
    this.isDisabled = false;
   }

  ngOnInit(): void {
  }

}
