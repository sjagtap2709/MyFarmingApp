import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiurl: string;
  loginstatus: string = "";
  private apicontent: Observable<any> | undefined
  constructor(private httpclientobj: HttpClient) {
    this.apiurl = environment.apiurl;
  }
  public CheckLogin(id: string | undefined, Password: string | undefined): string {
    this.apicontent = this.httpclientobj.get(this.apiurl + "User/?mail="+id+"&password="+Password);
    this.apicontent.subscribe(content => {
      this.loginstatus = content;
    });
    alert(this.loginstatus)
    return this.loginstatus;
  }

}
