import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutType : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  updateCheckout(){
    this.checkoutType = !this.checkoutType;
  }
}
