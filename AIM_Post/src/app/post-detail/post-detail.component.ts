import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: PostService) { }

  post!: Post;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.service.getPost(id).subscribe(post =>{
        this.post = post;
        console.log(this.post);
      })
    })
  }

}
