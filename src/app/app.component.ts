import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HospitalMangementSystem';

  // here  we are doing binding
  someValue:string="";
  someValues:Array<string>=new Array<string>();// or we can use java script coe like somVlues=[];/ to collcet all the values in the name of somevalue
  //
  CallSomeLogic(){
    //alert("hello")
    // adding below somecvalues from somevalue
    this.someValues.push(this.someValue);// here this what ever enetr values are somevalues to push into somevalues colection
    // we need clear text box also after clciking or stroing the data
    this.someValue="";// here after click buttion done means no data in text box to clear the text box

  }
}
