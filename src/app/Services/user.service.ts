import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiurl: string
  constructor(private httpclientobj:HttpClient) {
    this.apiurl = environment.apiurl;
  }

  
}
