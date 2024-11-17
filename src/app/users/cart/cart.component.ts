import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';

declare var $:any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isCartHotel : boolean = true;
  cartItems : any;
  constructor(private productService : ProductsServiceService) { }

  ngOnInit(): void {
    //this.isHotelCart();
    this.productService.getCartStatus().subscribe(
      (res) => {
        console.log(res);
        this.isCartHotel = res;
        this.cartItems = [
          {
            id : 1,
            name : 'Deluxe room',
            price : 999
          },
          {
            id : 2,
            name : 'Family Room',
            price : 2499
          },
          {
            id : 3,
            name : 'Suite Room',
            price : 4899
          }
        ]
      }
    );

  }
  isHotelCart(){
    this.productService.updateCart(false);
  }

}
