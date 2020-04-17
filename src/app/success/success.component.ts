import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  @Output() SecondNumber = new EventEmitter<number>();
  

  @Output() FirstNumber = new EventEmitter<number>();
  firstNumber : number;
  secondNumber: number;

  settingFirstNumber(){
    this.FirstNumber.emit(this.firstNumber);
  }


  settingSecondNumber(){
    this.SecondNumber.emit(this.secondNumber);
  }

  constructor() {

   }

  ngOnInit(): void {
  }

}