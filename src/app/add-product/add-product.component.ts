import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../core/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
product!:Product
  constructor(private _productService : ProductService ,private _router :Router) { }

  ngOnInit(): void {
    this.product=new Product();
  }
ajouter(){
  this._productService.addProduct(this.product);
  this._router.navigateByUrl('/products')
  console.log(this.product)
}
}
