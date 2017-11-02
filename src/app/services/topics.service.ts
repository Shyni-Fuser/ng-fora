import { Injectable } from '@angular/core';
import {Topic} from "../models/models";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";

@Injectable()
export class TopicsService {

  topics:Topic[] = [];

  constructor(public http: Http) { }

  getTopics():Observable<Topic[]>{
    return this.http
      .get("http://localhost:8080/jax-rs-1/api/topics")
      .map(response => response.json())
  }
}
