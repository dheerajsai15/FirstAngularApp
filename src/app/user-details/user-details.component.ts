import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeDataService } from '../fake-data.service';
import { Post } from '../Models/posts.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id:number;
  PostObj:Post;

  constructor(private ar:ActivatedRoute,private fs:FakeDataService) { }

  ngOnInit(): void {
    this.id = this.ar.snapshot.params.id;
    this.fs.getPostsById(this.id).subscribe(
      data => {this.PostObj = data},
      err => {console.log(err)}
    )
  }



}
