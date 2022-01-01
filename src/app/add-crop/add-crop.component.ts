import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Crop } from '../Services/crop';
import { Planting } from '../Services/planting';
import { User } from '../Services/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-add-crop',
  templateUrl: './add-crop.component.html',
  styleUrls: ['./add-crop.component.css']
})
export class AddCropComponent implements OnInit {
  public Profile: User;
  public cropid: number | undefined
  public cropdisplay: boolean;
  public addcropmenu: boolean;
  public crops!: Crop[];
  public Mycrop!: Crop;
  public MyPlanting!:Planting;
  apicontent!: Observable<any>;
  apiurl: string;
  constructor(private httpclientobj: HttpClient, private service: UserService ,private router:Router) {
    this.Profile = service.UserProfile;
    this.apiurl = environment.apiurl;
    this.cropdisplay = true;
    this.addcropmenu = false  ;
    this.apicontent = this.httpclientobj.get(this.apiurl + "Crop/");
    this.apicontent.subscribe(content => {
      this.crops = content;
    });
    this.Mycrop = new Crop();
    this.MyPlanting= new Planting();
  }
  Addcropmenu(num: number | undefined): void {
    this.crops.forEach(cr => {
      if(cr.CropId==num){
        this.Mycrop=cr;
      }
    });
    this.cropdisplay = false;
    this.addcropmenu = true;
  }

  AddCrop():void{
    this.MyPlanting.UserId=this.Profile.UserId;
    this.MyPlanting.CropId=this.Mycrop.CropId;
    this.MyPlanting.PlantingState="ongoing";
    this.httpclientobj.post(this.apiurl+"/Planting/",this.MyPlanting).pipe().subscribe();
    alert("Crop Addes Successfully");
    this.MyPlanting= new Planting();
    this.router.navigate(['/UserPage']);
  }
  Cancel():void{
    this.cropdisplay = true;
    this.addcropmenu = false  ;
  }
  ngOnInit(): void {
  }

}
