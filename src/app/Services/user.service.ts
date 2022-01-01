import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public UserProfile!: User;
  private apiurl: string;
  private apicontent: Observable<any> | undefined
  constructor(private httpclientobj: HttpClient) {
    this.apiurl = environment.apiurl;
  }
  public CreateAccount(user: User): string {
    this.httpclientobj.post<User>(this.apiurl + "User/", user).pipe().subscribe();
    return "Account Created Succesfully";
  }
 
}
