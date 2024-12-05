import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

    employeeId:number=101;
    employeeName:string="Satyam";
    employeeAge:number=22;

    title="Employee Details - Data Binding using various Directives"

    isManager:boolean = true;

    skills:string[] = ['JavaScript','Angular','TypeScript'];

   Position: PositionType =PositionType.SeniorDeveloper;

    address:{ street: string, city: string, postalCode: number} = {
      street: '123 Main St',
      city: 'New York',
      postalCode: 10001
    };
    //Any Data type(can be of any type)
    extraInfo:any='Additional employee info';

    //Event Binding - handling method
    message:string ='';

    //Two-way data binding
    employeePosition: string = 'Softwate Engineer';

    //Event Binding Method
    hello():void{
      this.message="Hello From event Binding in Angular By- "+this.employeeName;
    }
    clear():void{
      this.message='';
    }

    toggleManagerStatus():void{
      this.isManager = !this.isManager;
    }
  //Property Binding - One Way Binding
  username:string='Satyam';
  info:string='Property Binding - One way';

  updateUserName(){
    this.username='Satyam Singh'
  }

  convertToDate(){
    const date=new Date();
    return date.toLocaleDateString();
  }

  add():number{
    return 10+200;
  }
}
  //Enum for Position Type
  enum PositionType{
    JuniorDeveloper,
    SeniorDeveloper,
    TeamLead
  }
