import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service'
import { Post } from '../models';

@Component({
  selector: 'app-post-approval',
  templateUrl: './post-approval.component.html',
  styleUrls: ['./post-approval.component.css']
})
export class PostApprovalComponent implements OnInit {

  constructor(private service: PostService) { }

  ngOnInit(): void {
  }

}
