import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  role: any;
  ngOnInit() {
    this.role = localStorage.getItem('role');
    console.log(this.role)
  }

  logout(){
    localStorage.clear();
    location.reload(false);
  }
}
