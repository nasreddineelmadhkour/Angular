import { Component, OnInit } from '@angular/core';
import { Product } from '../core/product';
import { CalculServiceService } from '../services/calcul-service.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products:Product[]=[]
nbr!:Number
  constructor(private _productService:ProductService , private _calculService:CalculServiceService ) { 

  }


  ngOnInit(): void {
    this.products=this._productService.productslist;
  
    
  }
  Buy(id:string){
    this.products.map((product)=>product.id.match(id)&&product.quantity--)

    }

    Verifier(){
      this.nbr=this._calculService.getNumberOf(this.products,"quantity",0)
    }



  }


