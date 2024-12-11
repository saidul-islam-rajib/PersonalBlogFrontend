import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/core/interfaces/post';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post: Post | null = null;
  showInputField = false;
  inputControl: any;

  constructor(
    private router: Router,
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const postId = this.activatedRoute.snapshot.paramMap.get('id');
    if(postId){
      this.postService.getPostById(postId).subscribe({
        next: (data) => {
          this.post = data;
        },
        error: (err) => {
          console.log('Error: ', err);
          this.router.navigate(['not-found']);
        },
      });
    }

    this.inputControl = new FormControl('');
  }

  replaceWithInput() {
    this.showInputField = true;
  }
}
