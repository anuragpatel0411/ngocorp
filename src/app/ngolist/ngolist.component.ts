import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngolist',
  templateUrl: './ngolist.component.html',
  styleUrls: ['./ngolist.component.css']
})
export class NgolistComponent implements OnInit {

  constructor() { }

  ngoList: any=[
    {
      id: 1,
      name: "Demo1",
      location: "Delhi",
      field: "Children Education",
      email: "demo1@gmail.com"
    },
    {
      id: 2,
      name: "Demo2",
      location: "Mumbai",
      field: "Old Peoples",
      email: "demo2@gmail.com"
    },
    {
      id: 3,
      name: "Demo3",
      location: "Chennai",
      field: "Children Education",
      email: "demo3@gmail.com"
    }
  ]
  role: string;
  search: string="";
  ngOnInit() {
    this.role = localStorage.getItem('role');
  }

}
