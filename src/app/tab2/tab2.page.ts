import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  posts: Post[];

  constructor(private http: HttpClient) {
  }

  async ngOnInit(): Promise<void> {
    this.posts = await this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`).toPromise();
  }

  trackByPostId(index: number, post: Post) {
    return post.id;
  }

}
