import { Injectable } from '@angular/core';
import { Product } from './Models/user.model';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //Inject HttpClient Service Object
  constructor(private hc:HttpClient) { }
  

  getMobilesData():Observable<Product[]>{
    //http get
    return this.hc.get<Product[]>("http://localhost:3000/mobiles")
  }
}
