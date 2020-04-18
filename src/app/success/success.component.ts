import { Component, OnInit, Output, EventEmitter, ViewChild , ElementRef} from '@angular/core';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  @Output() SecondNumber = new EventEmitter<any>();
  

  @Output() FirstNumber = new EventEmitter<any>();
  // firstNumber : number;
  @ViewChild('secondNumber') secondNumber: ElementRef;

  settingFirstNumber(firstNumber : HTMLInputElement){
    //console.log(firstNumber.value)
    this.FirstNumber.emit(firstNumber.value);
  }


  settingSecondNumber(){
    this.SecondNumber.emit(this.secondNumber.nativeElement.value);
  }

  constructor() {
 

   }

   

  ngOnInit(): void {
  }

}