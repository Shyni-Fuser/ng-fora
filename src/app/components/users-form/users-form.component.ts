import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../../models/models";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'rc-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  user: User;
  copy = this.user;
  @Output() eventEmitter: EventEmitter<User> = new EventEmitter();


  constructor(public usersService:UsersService) { }

  ngOnInit() {
    this.user = {name: "Toto", id: 1, email: "toto@kaboom.io", admin: false};
    this.copy = this.user;
  }

  createUser() {
    this.copy = {...this.user}
    this.usersService.createUser(this.user).subscribe(response => this.eventEmitter.emit(this.copy));
  }
}
