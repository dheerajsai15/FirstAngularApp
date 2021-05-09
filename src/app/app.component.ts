import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyAngularApp1';
  Users:object[]=[];
  bool:boolean=false;
  addUserData(ref:NgForm)
  {
       let UserObj=ref.value;
       this.bool=true;
       this.Users.push(UserObj);
       ref.reset();
  }
  Del(ind:number)
  {
      this.Users.splice(ind,1);
  }  
}
