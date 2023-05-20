import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeserviceService } from 'src/app/services/employeeservice.service'
import { Empmodel } from 'src/app/model/empmodel'


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeModel: Empmodel = new Empmodel(0, '', 0);
  submitted = false;
  public Firstname:String;
  public Lastname:String;

  constructor(private empservice: EmployeeserviceService, private router: Router) { }
  ngOnInit(): void {
    this.employeeModel = new Empmodel(0, '', 0);
  }

  save() {
    if (!this.submitted) {
      this.submitted = true;
      this.empservice.addEmployee(this.employeeModel).subscribe(data => {
        console.log(data)
        alert(" Success")
        this.submitted = false;
        this.employeeModel = new Empmodel(this.employeeModel.employeeId!, this.employeeModel.employeeName!, this.employeeModel.employeeSalary!);
        });
    }
  }

}
