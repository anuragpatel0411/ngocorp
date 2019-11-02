import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-corpdetail',
  templateUrl: './corpdetail.component.html',
  styleUrls: ['./corpdetail.component.css']
})
export class CorpdetailComponent implements OnInit {

  id: number;
  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.id = params['id'];});
   }

   
  ngoList: any=[
    {
      id: 1,
      name: "Demo1",
      location: "Kolkata",
      industry: "Steel",
      email: "demo1@gmail.com",
      projectCompleted: [
        "ABC",
        "DEF",
        "ASA"
      ]
    },
    {
      id: 2,
      name: "Demo2",
      location: "Gujrat",
      industry: "Telecom",
      email: "demo2@gmail.com",
      projectCompleted: [
        "ABCR",
        "DEFY",
        "ASAH"
      ]
    },
    {
      id: 3,
      name: "Demo3",
      location: "Ghaziabad",
      industry: "Textile",
      email: "demo3@gmail.com",
      projectCompleted: [
        "ABCAS",
        "DEFGF",
        "ASART"
      ]
    }
  ]

  ngOnInit() {
  }

}
