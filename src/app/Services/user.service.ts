import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiurl: string;
  private apicontent: Observable<any> | undefined
  constructor(private httpclientobj: HttpClient) {
    this.apiurl = environment.apiurl;
  }
  public CheckLogin(id: string | undefined, Password: string | undefined): string {
    let loginstatus: string = "";
    this.apicontent = this.httpclientobj.get(this.apiurl + "User/?mail="+id+"&password="+Password);
    this.apicontent.subscribe(content => {
      loginstatus = content
    });
    return loginstatus;
  }

}
