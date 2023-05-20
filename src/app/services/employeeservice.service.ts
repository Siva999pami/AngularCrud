import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empmodel } from '../model/empmodel';
//import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  url = 'http://localhost:7777/';

  constructor(private httpClient: HttpClient) { }

  /*getAllEmployees(): Observable<Empmodel[]> {
    // [{},{}]
    return this.httpClient.get<Empmodel[]>(this.url).pipe(map((response:Empmodel[])=>{
      return response.map((emp:Empmodel)=>{
        return new Empmodel(emp.employeeId,emp.employeeName,emp.employeeSalary);
      })
    }))
    // return [Employee,Employee]
  }*/

  getEmployee(employeeId: number) {
    return this.httpClient.get(`this.url/${employeeId}`);
  }
  addEmployee(empObj: Empmodel) {
    return this.httpClient.post(this.url + "employee", empObj); //payload/body
  }

  deleteEmployee(employeeId: number) {
    return this.httpClient.delete(`this.url/${employeeId}`);
  }
}













