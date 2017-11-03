import {EventEmitter, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {User} from "../models/models";

@Injectable()
export class UsersService {

  logged:User = undefined;

  constructor(public http: Http) { }

  getUsers():Observable<User[]>{

    const observable = this.http
      .get("http://localhost:8080/jax-rs-1/api/users")
      .map(response => response.json())
    return observable;
  }

  createUser(user:User){
    return this.http.post("http://localhost:8080/jax-rs-1/api/users", user);
  }

  getLogged():User{
    return this.logged;
  }
}
