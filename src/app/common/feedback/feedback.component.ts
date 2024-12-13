import { Component, Input, OnInit } from '@angular/core';
import { CommentInterface } from 'src/app/core/interfaces/comments';
import { CommentService } from 'src/app/core/services/comment.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  comment_list: CommentInterface[] | null = [];
  @Input() postId!: string;
  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.commentService.getCommentByPostId(this.postId).subscribe({
      next: (response) => {
        this.comment_list = response;
      },
      error: (err) => {
        console.log('Error: ', err);
      },
    });
  }
}
