import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login.component',
  templateUrl: './login.component.component.html',
  styleUrls: ['./login.component.component.scss']
})
export class LoginComponent implements OnInit {
  value = "Barbie User";
  constructor() { }

  ngOnInit() {
  }

}
