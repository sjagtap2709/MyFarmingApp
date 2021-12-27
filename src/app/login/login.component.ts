import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 public userid: string | undefined;
 public userpass: string | undefined;
  url: string | undefined;
  constructor(private router: Router) {
    this.url = environment.apiurl;
  }
  login(): void {
    if (this.userid == "1234" && this.userpass == "1111") {
      this.router.navigate(['/UserPage']);
    }
    else {
      this.userpass = undefined;
      this.userid = undefined;
      alert("Invalid Credential" + this.url);

    }
  }
  ngOnInit(): void {

  }


}
