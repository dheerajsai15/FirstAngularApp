import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {DataService} from '../data.service'
import { Product } from '../Models/user.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit,OnDestroy{
  mySubscription:Subscription
  mobiles:Product[]=[];
   
   //Inject object of data service class
    constructor(private dsObj:DataService){
    }

   ngOnInit(){
     
    this.mySubscription = this.dsObj.getMobilesData().subscribe(
      data=>{
        this.mobiles=data;
      },
      err=>{
        console.log("Err is ",err);
      }
    )

   }

   ngOnDestroy(){
     this.mySubscription.unsubscribe();
   }

}


