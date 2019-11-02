import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ngodetail',
  templateUrl: './ngodetail.component.html',
  styleUrls: ['./ngodetail.component.css']
})
export class NgodetailComponent implements OnInit {

  id:number;
  
  ngoList: any=[
    {
      id: 1,
      name: "Demo1",
      location: "Delhi",
      field: "Children Education",
      email: "demo1@gmail.com",
      fund: "1,55,400",
      projectCompleted: [
        "ABC",
        "DEF",
        "ASA"
      ],
      projectsUndergoing: [
        {
          name: "XYZUE",
          budget: "Rs. 23,454",
          progress: "30%"
        },
        {
          name: "MNEOS",
          budget: "Rs. 85,547",
          progress: "80%"
        }
      ]
    },
    {
      id: 2,
      name: "Demo2",
      location: "Mumbai",
      field: "Old Peoples",
      email: "demo2@gmail.com",
      fund: "2,00,000",
      projectCompleted: [
        "ABCR",
        "DEFY",
        "ASAH"
      ],
      projectsUndergoing: [
        {
          name: "XYZUE",
          budget: "Rs. 23,454",
          progress: "30"
        },
        {
          name: "MNEOS",
          budget: "Rs. 85,547",
          progress: "80"
        }
      ]
    },
    {
      id: 3,
      name: "Demo3",
      location: "Chennai",
      field: "Children Education",
      email: "demo3@gmail.com",
      fund: "1,55,400",
      projectCompleted: [
        "ABCAS",
        "DEFGF",
        "ASART"
      ],
      projectsUndergoing: [
        {
          name: "XYZUE",
          budget: "Rs. 23,454",
          progress: "30"
        },
        {
          name: "MNEOS",
          budget: "Rs. 85,547",
          progress: "80"
        }
      ]
    }
  ]

  constructor(private route: ActivatedRoute) { 
    route.params.subscribe(params => { this.id = params['id'];});
  }

  ngOnInit() {
  }

}
