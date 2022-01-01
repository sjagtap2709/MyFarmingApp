import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserService } from '../Services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  static usermail: string;
  public userid: string = "";
  public userpass: string = "";
  private userstatus: string | undefined;
  apiurl: string;
  apicontent!: Observable<any>;

  constructor(private router: Router, private services: UserService, private httpclientobj: HttpClient) {
    this.apiurl = environment.apiurl;
  }

  login(): void {
    if (this.userpass == "" && this.userid == "") {
      alert("Enter Credentials");
    }
    else {
      this.apicontent = this.httpclientobj.get(this.apiurl + "User/?mail=" + this.userid + "&password=" + this.userpass);
      this.apicontent.subscribe(content => {
        this.userstatus = content;
      });
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
        LoginComponent.usermail= this.userid;
        this.userstatus = undefined;
      }
    }
  }

  ngOnInit(): void {

  }
}

