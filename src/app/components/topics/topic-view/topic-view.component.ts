import {Component, Input, OnInit} from '@angular/core';
import {Topic} from "../../../models/models";
import {Comment} from "../../../models/models";

@Component({
  selector: 'rc-topic-view',
  templateUrl: './topic-view.component.html',
  styleUrls: ['./topic-view.component.css']
})
export class TopicViewComponent implements OnInit {

  @Input() topic: Topic;
  constructor() { }

  ngOnInit() {
  }

  getTopicId(){
    return this.topic.id;
  }

  updateComments(comment:Comment){
    this.topic.comments = this.topic.comments.concat(comment);
  }

}
