import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  showInputField = false;
  inputControl: any;

  ngOnInit() {
    this.inputControl = new FormControl('');
  }

  replaceWithInput() {
    this.showInputField = true;
  }

}
