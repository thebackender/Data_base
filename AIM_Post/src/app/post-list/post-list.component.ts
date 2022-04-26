import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private service: PostService,
              private location: Location) {
  }

  posts: Post[] = [];

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.service.getPosts().subscribe((posts) => {
      this.posts = posts;
    })
  }

  onClick() {
    alert("lol");
  }

  goBack(){
    this.location.back();
  }
}
