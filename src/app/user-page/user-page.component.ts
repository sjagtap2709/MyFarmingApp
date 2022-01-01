import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { LoginComponent } from '../login/login.component';
import { Planting } from '../Services/planting';
import { User } from '../Services/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  public profile!: User;
  public MyPlantings!: Planting[];
  apicontent: Observable<any>;
  apiurl: string;
  iscrop!: boolean;
  isnotcrop!: boolean;
  constructor(private router: Router, private services: UserService, private httpclientobj: HttpClient) {
    this.profile = new User();
    this.MyPlantings = [];
    this.apiurl = environment.apiurl;
    this.apicontent = this.httpclientobj.get(this.apiurl + "User/?mail=" + LoginComponent.usermail);
    this.apicontent.subscribe(content => {
      this.profile = content;
      services.UserProfile = content;
      this.apicontent = this.httpclientobj.get(this.apiurl + "Planting/" + content.UserId);
      this.apicontent.subscribe(content => {
        this.MyPlantings = content;
        if (this.MyPlantings.length < 1) {
          this.iscrop = false;
          this.isnotcrop = true;
        }
        else {
          this.iscrop = true;
          this.isnotcrop = false;
        }
      });
    });

  }
  gotocrops(): void {
    this.router.navigate(['/Crops']);
  }

    
    
  Record(plantingid:number):void{
    alert(plantingid);
  }
  ngOnInit(): void {
  }

}
