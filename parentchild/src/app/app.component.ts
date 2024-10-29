import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchild';
  EnterName="stefan";
  EnterAge=22;
  EnterStatus="Single";
  EnterDOB="26-03-2003";
  EnterNumber=9999904488;
  EnterGender='';
  parentData1="";
  parentData2=0;
  parentData3="";
  parentData4="";
  parentData5=0;
  parentData6 = "";  
  transferData(){
    this.parentData1=this.EnterName;
    this.parentData2=this.EnterAge;
    this.parentData3=this.EnterStatus;
    this.parentData4=this.EnterDOB;
    this.parentData5=this.EnterNumber;
    this.parentData6=this.EnterGender;
  }
  value="";
  //is passed by $event
  sendData(value:string){
    this.value=value;
  }
}
