import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Post } from 'src/app/core/interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  showInputField = false;
  inputControl: any;

  ngOnInit() {
    console.log("something else have been called")
    this.inputControl = new FormControl('');
  }

  replaceWithInput() {
    this.showInputField = true;
  }

}
