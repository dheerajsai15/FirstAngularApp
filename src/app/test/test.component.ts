import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakeDataService } from '../fake-data.service';
import { Post } from '../Models/posts.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  Posts:Post[];

  constructor(private fs:FakeDataService,private router:Router) { }

  ngOnInit(): void {
    this.fs.getPosts().subscribe(
      data => { this.Posts = data},
      err => { console.log(err)}
    );
  }

  navgateTo(ind):void{
    this.router.navigateByUrl("/test/"+ind);
  }

}
