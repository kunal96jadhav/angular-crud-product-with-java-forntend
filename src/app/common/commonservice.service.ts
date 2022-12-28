import { HttpClient } from '@angular/common/http';
import { CssSelector } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

product:Product={
  productId: 0,
  productName: '',
  productPrice: 0
}
  constructor(private http:HttpClient) { }

  productSave(product:FormGroup){
   return this.http.post("http://localhost:9090/api/productSave",product);
  }
  productFeatch(){
    return this.http.get("http://localhost:9090/api/productFetchAllData");
  }
  productDelete(productId:number){
    return this.http.delete("http://localhost:9090/api/productDelete/"+productId);
  }
  // productUpdate(product:Product){

  //   return this.http.put("http://localhost:9090/api/productUpdate/"+product.productId,product)
  // }
  
}
