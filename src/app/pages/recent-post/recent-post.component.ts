import { Component } from '@angular/core';
import { Post } from 'src/app/core/interfaces/post';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-featured-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.scss']
})
export class RecentPostComponent {
  posts: Post[] = [];

  constructor(private postService: PostService){}

  ngOnInit(): void{
    this.loadPosts();
  }

  loadPosts(): void{
    this.postService.getRecentPosts().subscribe({
      next:(data) => {
        console.log("got response : ", data);
        this.posts = data;
      },
      error:(err) => {
        console.log("recent post error : ", err);
      }
    })
  }
}
