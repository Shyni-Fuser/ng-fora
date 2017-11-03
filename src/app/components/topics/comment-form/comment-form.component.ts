import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Comment, User} from "../../../models/models";
import {UsersService} from "../../../services/users.service";
import {TopicViewComponent} from "../topic-view/topic-view.component";

@Component({
  selector: 'rc-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  user: User;
  comment: Comment;
  copy = this.comment;
  @Output() eventEmitter: EventEmitter<Comment> = new EventEmitter();

  constructor(public usersService:UsersService, public topicView:TopicViewComponent) { }

  ngOnInit() {
    this.user = this.usersService.logged;
    this.comment = {
      id: 84,
      content: "",
      user: this.usersService.logged
    }
    this.copy = this.comment;
  }

  postComment(){
    this.copy = {...this.comment};
    this.usersService
      .http
      .post("http://localhost:8080/jax-rs-1/api/topics/" + this.topicView.getTopicId() + "/comments", this.comment)
      .subscribe(response => this. eventEmitter.emit(this.copy));
  }
}
