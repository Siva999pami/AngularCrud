export class Empmodel {

  employeeId?: number;
  employeeName?: string;
  employeeSalary?: number; // Structure

  constructor(employeeId: number, employeeNam: string, employeeSalary: number) {
    // this.employeeId != employeeId;
    this.employeeName != employeeNam;
    this.employeeSalary != employeeSalary;
  }

  getYearlySalary(): number {
    return 12 * parseFloat(this.employeeSalary ? this.employeeSalary.toString() : '0') + 500;
  }
}
