import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    {
      id: '1',
      name: 'Panchanan',
      email: 'pturuk123@gmail.com',
      phone: 8596957901,
      salary: 10000,
      department: 'Software'
     },
     {
      id: '2',
      name: 'Suman',
      email: 'suman@gmail.com',
      phone: 8018640492,
      salary: 20000,
      department: 'Human Resource'
     },
     {
      id: '3',
      name: 'Shiv',
      email: 'shiv@gmail.com',
      phone: 8596957405,
      salary: 10000,
      department: 'Analyst'
     },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
