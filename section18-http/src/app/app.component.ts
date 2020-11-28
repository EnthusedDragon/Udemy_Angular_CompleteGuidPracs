import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.mode';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts = [];
  isFetching = false;
  isError = null;

  private errorSubscription: Subscription;

  constructor(private http: HttpClient, private postService: PostsService) {}

  ngOnInit() {    
    this.errorSubscription = this.postService.error.subscribe(error => this.isError = error);
    this.onFetchPosts()
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
      this.isFetching = true;
    this.postService.fetchPosts().subscribe(posts=>{
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error=>{
      this.isFetching = false;
      this.isError = error.message;
    });
  }

  onClearPosts() {
    this.postService.clearPosts().subscribe(()=>{
      this.loadedPosts = [];
    });
  }

  ngOnDestroy(){
    this.errorSubscription.unsubscribe();
  }

  onHandleError(){
    this.isError = null;
  }
}
