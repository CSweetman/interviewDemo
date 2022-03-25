import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  users : User[] = []
  title = 'interviewDemo';
  
  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users.data;
      console.log(users)
      })
  }

}
