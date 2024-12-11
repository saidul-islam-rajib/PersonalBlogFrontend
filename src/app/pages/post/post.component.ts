import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  constructor(private postService: PostService) {}

  ngOnInit() {
    console.log('post id is called!');

    const postId = '6759d45f-f404-800d-b38e-330d8cd0eab0';
    this.postService.getPostById(postId).subscribe({
      next: (data) => {
        this.post = data;
        console.log('POST DATA:', this.post);
      },
      error: (err) => {
        console.log('ERROR IN FETCHING POST DATA : ', err);
      },
    });

    this.inputControl = new FormControl('');
  }

  replaceWithInput() {
    this.showInputField = true;
  }
}
