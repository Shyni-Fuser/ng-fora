import { Component, OnInit } from '@angular/core';
import {User} from "../../models/models";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'rc-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  ngOnInit() {
    //this.usersService.resetCache();
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
      this.usersService.logged = users[2];
    })
  }

  constructor(public usersService:UsersService){
  }

  getUsers():User[] {
    return this.users;
  }

  updateList(user:User){
    this.users.push(user);
  }

}
