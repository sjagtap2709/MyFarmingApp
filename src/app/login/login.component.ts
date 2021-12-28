import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userid: string | undefined;
  public userpass: string | undefined;
  private userstatus: string | undefined;

  constructor(private router: Router, private services: UserService) {
  }

   login(): void {
    if (this.userpass == undefined && this.userid == undefined) {
      alert("Enter Credentials");
    }
    else {
      this.userstatus = this.services.CheckLogin(this.userid, this.userpass);
      
      alert(this.userstatus)
      if (this.userstatus == "NoUser") {
        {
          alert("Mail id is not registerd");
        }
      }
      else if (this.userstatus == "InvalidPass") {
        {
          alert("Incorrect Password");
        }
      }
      else if (this.userstatus == "Success") {
        alert("Login Succesfully");
        this.router.navigate(['/UserPage']);
      }
    }
  }




  ngOnInit(): void {

  }
}

