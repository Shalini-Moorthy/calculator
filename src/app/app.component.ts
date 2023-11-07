import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  Funct:any="NoFunction";
  calValue:number=0;
  calNumber:string='noValue'
  FirstNo:number=0;
  SecondNo:number=0;
  onClickValue(val:string,type:any){
     if (type=='number'){
      this.onNumberClick(val);}
      else if(type=='function'){
        this.onFunctionClick(val);
      }
  }
  onNumberClick(val:string){
     if(this.calNumber!='noValue'){
      this.calNumber=this.calNumber+val;}
    else{
      this.calNumber=val;
    }
    this.calValue=parseFloat(this.calNumber);
  }
  onFunctionClick(val:string){
         if(val=="C"){
           this.clearAll()
         }
         if(this.Funct=='NoFunction'){
          this.FirstNo=this.calValue;
          this.calValue=0;
          this.calNumber='noValue';
          this.Funct=val;}
         else if (this.Funct!='NoFunction'){
          this.SecondNo=this.calValue;
          this.valueCalculator(val)
         }
  }
  valueCalculator(val: string){
        if(this.Funct=='+'){
        const total=this.FirstNo+this.SecondNo
        this.totalAssignValues(total,val)
        }
        if(this.Funct=='-'){
          const total=this.FirstNo-this.SecondNo
          this.totalAssignValues(total,val)
          }
        if(this.Funct=='/'){
          const total=this.FirstNo/this.SecondNo
            this.totalAssignValues(total,val)
             }
        if(this.Funct=='*'){
          const total=this.FirstNo*this.SecondNo
            this.totalAssignValues(total,val)
             }
        if(this.Funct=='%'){
          const total=this.FirstNo*this.SecondNo
          this.totalAssignValues(total,val)
           }
  }
  totalAssignValues(total:number,val:string){
    this.calValue=total;
    this.FirstNo=total;
    this.SecondNo=0;
    this.calNumber='noValue'
    this.Funct=val;
    if(val=="="){
      this.onEqualPress();
     } 
  }
  onEqualPress(){
    this.FirstNo=0
    this.SecondNo=0
    this.Funct="NoFunction"
    this.calNumber='noValue'
    
  }
  clearAll(){
    this.FirstNo=0
    this.SecondNo=0
    this.calValue=0
    this.Funct="NoFunction"
    this.calNumber='noValue'
  }
}
