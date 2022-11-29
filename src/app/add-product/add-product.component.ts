import { Component, OnInit } from '@angular/core';
import { product } from '../core/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
product!:product
  constructor() { }

  ngOnInit(): void {
    this.product=new product();
  }
ajouter(){
  console.log(this.product)
}
}
