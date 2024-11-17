import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductsServiceService } from '../products-service.service';

declare var $:any;
@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  categoryID : any;
  products : any = [
    {
      id : 1,
      name : 'Deluxe Room',
      price : 999,
      description : 'Our Deluxe rooms are naturally lit, air-conditioned and decorated with handcrafted modern artworks.',
      category : 1,
      image : 'deluxe.jpg'
    },
    {
      id : 2,
      name : 'Ultra Deluxe Room',
      price : 1199,
      description : 'Ultra Deluxe rooms are naturally lit, air-conditioned and decorated with handcrafted modern artworks.',
      category : 1,
      image : 'UltraDeluxe.jpg'
    },
    {
      id : 3,
      name : 'Business Rooms',
      price : 1299,
      description : 'Our Business rooms are naturally lit, air-conditioned and decorated with handcrafted modern artworks.',
      category : 1,
      image : 'Business.jpg'
    },
    {
      id : 4,
      name : 'Family Room',
      price : 2499,
      description : 'Our Family rooms are naturally lit, air-conditioned and decorated with handcrafted modern artworks.',
      category : 1,
      image : 'Family.jpg'
    },
    {
      id : 5,
      name : 'Suite Room',
      price : 4999,
      description : 'Our Suite rooms are naturally lit, air-conditioned and decorated with handcrafted modern artworks.',
      category : 1,
      image : 'Suite.jpg'
    }
  ];
  productData : any;
  singleProductData : any;
  constructor(
    private activeRoute : ActivatedRoute, private productService : ProductsServiceService
  )
  {
    this.activeRoute.queryParams.subscribe((qp) => {
      console.log('Get Router Params:', this.activeRoute.snapshot.params.id);
      this.categoryID = this.activeRoute.snapshot.params.id
    });
    //this.getProductDetails();
  }

  ngOnInit(): void {

  }

  getProductData(id : any){
    if(id){
      //const data = this.productService.getSouthProducts();
      console.log(id)
      this.singleProductData = this.products.filter((x : any) => x.id == id)
      this.singleProductData = this.singleProductData[0];
      console.log("first",this.singleProductData)
      //$("#ForgotPassword").modal('hide');
      $("#addons-options-modal").modal('show');
    }
  }
  addProductToCart(id : any){
    console.log(id)
    if(id != null){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Added to cart',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

}
