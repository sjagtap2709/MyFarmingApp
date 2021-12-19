import { Component, OnInit } from '@angular/core';
import { Crop } from '../Services/crop';

@Component({
  selector: 'app-add-crop',
  templateUrl: './add-crop.component.html',
  styleUrls: ['./add-crop.component.css']
})
export class AddCropComponent implements OnInit {

  public crops:Crop[];
  constructor() {
    this.crops=[
      {
        CropId:12,
        CropName:"Sourabh",
        CropImageUrl:"../../assets/maka.jpg ",
        CropDescription:"dfasdfag"
    },
      {
        CropId:1,
        CropName:"suhas",
        CropImageUrl:"../../assets/wheat.jpg ",
        CropDescription:"dfasdfag"
    }
  ]
   }
  Addcrop(num:number|undefined):void{
    alert("you  alert"+num);
  }
  ngOnInit(): void {
  }

}
