import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from '../../products-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router : Router, private productService : ProductsServiceService) { }

  ngOnInit(): void {
  }

  setRoomCheckout(){
    this.productService.updateCart(true);
    this.router.navigateByUrl('/cart');
  }
}
