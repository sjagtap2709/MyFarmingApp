import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Services/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public user: User
  constructor(private router: Router,private service:UserService) {
    this.user = new User();
  }
  Signup(): void {
    if(this.user.UserName==""||this.user.UserAddress==""||this.user.UserEmail==""||this.user.UserPassWord==""){
      alert("Fill All Details");
    }
    else{
      alert(this.service.CreateAccount(this.user));
      this.router.navigate(['/Login']);
    }
  }
  Cancel(): void {
    this.router.navigate(['/Login']);
  }
  ngOnInit(): void {
  }

}
