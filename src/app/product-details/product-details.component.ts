import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Models/user.model';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent{
  @Input() productObject:Product;
 
}
