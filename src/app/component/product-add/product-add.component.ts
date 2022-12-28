import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent{
  constructor(private fb:FormBuilder, public cs:CommonserviceService){}
  productForm:FormGroup;
  product:Product={
   productId: 0,
   productName: '',
   productPrice: 0
 }
  ngOnInit(){
    this.productForm=this.fb.group({
      productId:[],
      productName:[],
      productPrice:[]
    })
    let product:Product=JSON.parse(localStorage.getItem('id'))
    this.productForm.controls['productId'].setValue(product.productId);
    this.productForm.controls['productName'].setValue(product.productName);
    this.productForm.controls['productPrice'].setValue(product.productPrice);
  }
  saveProduct(){
    
    this.cs.productSave(this.productForm.value).subscribe((data:any)=>{
      console.log(data)
    });
  }
}
