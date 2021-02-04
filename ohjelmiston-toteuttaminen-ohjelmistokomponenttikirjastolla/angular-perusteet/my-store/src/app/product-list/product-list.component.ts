import { Component, OnInit } from "@angular/core";
import { products } from "../products";
import {
  faFacebookF,
  faTwitterSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import { CartService } from "../cart.service";


@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  faFacebookF = faFacebookF;
  faTwitterSquare = faTwitterSquare;
  faInstagram = faInstagram;

  products = products;
  
  //product: any;
  
  constructor(private cartService: CartService) {}

  share() {
    window.alert("The product has been shared!");
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }

  addToCart(product: any) {
    
    window.alert("Your product has been added to the cart!");
    this.cartService.addToCart(product);
    //console.log('Prod:',product);
    
  }

  ngOnInit() {
    
    console.log(this.products);
  }
}
