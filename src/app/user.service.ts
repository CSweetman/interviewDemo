import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://reqres.in/api/users?per_page=5'

  constructor(private http: HttpClient) { }


  getUsers(): Observable<{data : User[]}>{
    return this.http.get<{ data: User[] }>(this.url)
  }
}
