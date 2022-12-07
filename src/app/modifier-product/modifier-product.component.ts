import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../core/product';
import { ProductCosumerService } from '../services/product-cosumer.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-modifier-product',
  templateUrl: './modifier-product.component.html',
  styleUrls: ['./modifier-product.component.css']
})
export class ModifierProductComponent implements OnInit {
  product!:Product;
  email!:string
  id!:string

  constructor(private _productService: ProductService,private _router:Router,private productConsumer:ProductCosumerService) { }

  ngOnInit(): void {
    this.product = new Product();

  }

  modifier(){
    this.productConsumer.updateProduct(this.product).subscribe({
      next: ()=>this._router.navigateByUrl('/products'),
      error: (error)=>console.log(error),
      complete:()=>console.log("I m finishing")
    })
     
    // => routerLink="/products" HTML
    console.log(this.product)
  }
}
