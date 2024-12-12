import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/core/interfaces/post';
import { CommentService } from 'src/app/core/services/comment.service';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  postId!: string;
  post: Post | null = null;
  comment: Comment[] | null = [];
  showInputField = false;
  inputControl: any;

  constructor(
    private router: Router,
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) {
    console.log("post component")
  }

  ngOnInit() {
    const postId = this.activatedRoute.snapshot.paramMap.get('id');
    if(postId){
      this.postId = postId;
      // fetch post data
      // this.postService.setPostId(postId);

      this.postService.getPostById(postId).subscribe({
        next: (data) => {
          this.post = data;
        },
        error: (err) => {
          console.log('Error: ', err);
          this.router.navigate(['not-found']);
        }
      });

      // fetch comment data
      // this.commentService.getCommentByPostId(postId).subscribe({
      //   next: (response) => {
      //     console.log("Comment data : ", response)
      //     this.comment = response;
      //   },
      //   error: (err) => {
      //     console.log('Error: ', err);
      //     this.router.navigate(['not-found']);
      //   }
      // });
    }

    this.inputControl = new FormControl('');
  }

  replaceWithInput() {
    this.showInputField = true;
  }
}
