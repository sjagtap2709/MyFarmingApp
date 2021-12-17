import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid: string | undefined;
  userpass: string | undefined;
  constructor(private router: Router) {

  }
  login(): void {
    if(this.userid=="1234"&&this.userpass=="1111"){
      this.router.navigate(['/UserPage']);
    }
    else{
      this.userpass=undefined;
      this.userid=undefined;
      alert("Invalid Credential")
    }
  }
  ngOnInit(): void {
  }

}
