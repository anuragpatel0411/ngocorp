import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corplist',
  templateUrl: './corplist.component.html',
  styleUrls: ['./corplist.component.css']
})
export class CorplistComponent implements OnInit {

  constructor() { }

  ngoList: any=[
    {
      id: 1,
      name: "Demo1",
      location: "Kolkata",
      industry: "Steel",
      email: "demo1@gmail.com"
    },
    {
      id: 2,
      name: "Demo2",
      location: "Gujrat",
      industry: "Telecom",
      email: "demo2@gmail.com"
    },
    {
      id: 3,
      name: "Demo3",
      location: "Ghaziabad",
      industry: "Textile",
      email: "demo3@gmail.com"
    }
  ]

  ngOnInit() {
  }

}
