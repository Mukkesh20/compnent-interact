import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 FirstNumber:any  ;
 SecondNumber:any;
 result: any;

constructor(){

}

  settFirstNumber(firstNumber: any ){
   
    this.FirstNumber=firstNumber;
  
  }

  settSecondNumber(secondNumber:any){
   
    
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
