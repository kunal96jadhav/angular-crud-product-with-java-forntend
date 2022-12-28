import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/common/commonservice.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(private fb:FormBuilder, private cs:CommonserviceService, private router:Router){}
  product:any[];
  updateForm:FormGroup;
  ngOnInit(){
    this.updateForm=this.fb.group({
      productId:[],
      productName:[],
      productPrice:[]
    })
    this.cs.productFeatch().subscribe((data:any)=>{
      this.product=data
    })
  }

  productDelete(productId:number){
    this.cs.productDelete(productId).subscribe();
    window.location.reload();
  }
  productEdit(p:Product){
   // console.log(p.productId)
    // this.updateForm.controls['productId'].setValue(p.productId);
    // this.updateForm.controls['productName'].setValue(p.productName);
    // this.updateForm.controls['productPrice'].setValue(p.productPrice);
    let productJson:string=JSON.stringify(p);
    localStorage.setItem('id',productJson);
    this.router.navigateByUrl('add');
  }
  productUpdate()
  {
    //console.log(this.updateForm.controls['productId'].value)
    // this.cs.productUpdate(this.updateForm.value).subscribe();
    // window.location.reload();
  }
}
