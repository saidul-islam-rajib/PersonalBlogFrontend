import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/models/post-model';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // data: Post[] = [
  //   {
  //     id: '219EF7EA-CB85-4BD6-A587-61BCA135E022',
  //     postTitle: 'Post 1',
  //     postAbstract: 'This is the abstract of post 1.',
  //     userId: '219EF7EA-CB85-4BD6-A587-61BCA135E022',
  //     createdDateTime: new Date(),
  //     updatedDateTime: new Date().toISOString()
  //   }
  // ];

  data: Post[] = [];

  constructor(
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe({
      next: (posts) => {
        console.log("backend data : ", posts)
        this.data = posts;
      },
      error: (err) => {
        console.error('Error fetching posts:', err);
      }
    });
  }

  openPostTab(id: any){
    this.router.navigate(['home/posts/sdff'])
  }

}
