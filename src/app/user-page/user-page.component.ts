import { CompileIdentifierMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  
  constructor(private router:Router) { 
  }
  gotocrops():void{
    this.router.navigate(['/Crops']);
  }
  ngOnInit(): void {
  }

}
