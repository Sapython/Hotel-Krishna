import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../products-service.service';
import Swal from 'sweetalert2'
import jQuery from 'jquery'

declare var $:any;
declare var jQuery :any;
declare var jquery : any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  newArrivals : any  = [];
  allProducts : any = [];

  cartItems : number = 0;
  productData : any = {};
  slideConfig = {
		centerMode: true,
		centerPadding: '30px',
		slidesToShow: 6,
		arrows: false,
		responsive: [{
			breakpoint: 769,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
			}
		}, {
			breakpoint: 480,
			settings: {
				arrows: false,
				infinite: true,
        		slidesToScroll: 1,
        		autoplay: true,
         		autoplaySpeed: 3000,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 2
			}
		}]
	}
  bannerConfig = {
		centerMode: true,
		centerPadding: '40px',
		slidesToShow: 5,
		infinite: true,
		slidesToScroll: 1,
		autoplay: true,
 		autoplaySpeed: 5000,
		arrows: false,
		responsive: [{
			breakpoint: 769,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '10px',
				slidesToShow: 2
			}
		}]
	}
  productConfig = {
		centerMode: false,
		infinite: true,
		centerPadding: '50px',
		slidesToShow: 5,
		arrows: true,
		responsive: [
		{
			breakpoint: 1282,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 3
			}
		}
		,{
			breakpoint: 991,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 1
			}
		}]
	}
  constructor(private productService : ProductsServiceService) {
    this.getAllProducts();
  }

  ngOnInit(): void {

  }
  getAllProducts () {
    let data = this.productService.getSouthProducts();
    this.allProducts = data;
  }
  getProductData(categoryID ,id : any){
    if(id){
      const data = this.productService.getSouthProducts();
      console.log(data)
      this.productData = data.filter((x : any) => x.id == categoryID)
      console.log("first",this.productData)
      this.productData = this.productData[0];
      this.productData = this.productData.products.filter((x : any) => x.id == id)
      console.log("second",this.productData)
      this.productData = this.productData[0];
      console.log(this.productData)
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
      this.cartItems = this.cartItems + 1;
    }
  }

}
