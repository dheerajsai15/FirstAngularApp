import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './Models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  constructor(private hc:HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.hc.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }

  getPostsById(id:number):Observable<Post>{
    return this.hc.get<Post>("https://jsonplaceholder.typicode.com/posts/"+id);
  }
}
