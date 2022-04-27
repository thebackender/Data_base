import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models';
import { DataService } from 'src/data.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(private service: PostService,
              private data: DataService,
              private location: Location) { }

  title = "";
  text = "";
  username = "";
  url = "";

  ngOnInit(): void {
    this.data.currentData.subscribe( name => {
      this.username = name;
    })
  }

  addPost(){
    let k: Post = { 
      id: 12,
      title: this.title,
      author: this.username, 
      text: this.text,
      url: this.url,
      comments: [],
      feedbacks: []
    }
    this.service.addPost(k).subscribe();
    this.goBack();
  }

  goBack(){
    this.location.back();
  }
}
