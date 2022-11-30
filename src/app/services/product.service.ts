import { Injectable } from '@angular/core';
import { Product } from '../core/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productslist:Product[]= [
    {id: '1', title: 'T-shirt 1', price: 18, quantity: 0, like: 0, picture : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Shakira_for_VOGUE_in_2021_2.png/240px-Shakira_for_VOGUE_in_2021_2.png'},
    {id: '2', title: 'T-shirt 2', price: 21, quantity: 10, like: 0, picture : 'https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/2fdbd7ab-f378-4c63-8b21-c944ad2633fd/header_t-shirts2.jpg'},
    {id: '3', title: 'T-shirt 3', price: 16, quantity: 8, like: 0, picture : 'https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/2fdbd7ab-f378-4c63-8b21-c944ad2633fd/header_t-shirts2.jpg'},
  ];
  constructor() { }

  addProduct(product:Product){
    this.productslist.push(product);
  }


}
