import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 FirstNumber:number  ;
 SecondNumber:number;
 result: number;

constructor(){

}

  settFirstNumber(firstNumber: number ){
   
    this.FirstNumber=firstNumber;
  
  }

  settSecondNumber(secondNumber:number){
   
    
    this.SecondNumber=secondNumber;
  }

  onSub(){
    this.result= this.FirstNumber - this.SecondNumber;
  }

  onDiv(){
    this.result= this.FirstNumber / this.SecondNumber;
  }

  onAdd(){
    
    this.result= +this.FirstNumber + +this.SecondNumber;

  }

  onMulti(){
    this.result= this.FirstNumber * this.SecondNumber;
  }

  pause(){

  }
}
