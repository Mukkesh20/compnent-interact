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
    console.log(firstNumber.value)
    this.FirstNumber.emit(firstNumber.value);
  }


  settingSecondNumber(){
    this.SecondNumber.emit(this.secondNumber.nativeElement.value);
  }

  constructor() {
  fetch("https://wft-geo-db.p.rapidapi.com/v1/locale/locales", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
		"x-rapidapi-key": "5e6ed25e1fmsh7b59c19a3a2154bp115654jsn4f839fdbde1d"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});

   }

  ngOnInit(): void {
  }

}