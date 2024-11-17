import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsServiceService } from '../products-service.service';

declare var $:any;
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
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
  productData : any = {};
  bannerConfig = {
		centerMode: true,
		centerPadding: '40px',
		slidesToShow: 4,
		infinite: true,
		slidesToScroll: 1,
		autoplay: true,
 		autoplaySpeed: 3000,
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
  sliderConfig = {
		centerMode: false,
		centerPadding: '40px',
		slidesToShow: 1,
		infinite: true,
		slidesToScroll: 1,
		autoplay: true,
 		autoplaySpeed: 3000,
		arrows: true,
		responsive: [{
			breakpoint: 769,
			settings: {
				arrows: true,
				centerMode: false,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}, {
			breakpoint: 480,
			settings: {
				arrows: true,
				centerMode: false,
				centerPadding: '10px',
				slidesToShow: 1
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
  constructor(private router : Router, private productService : ProductsServiceService) { }

  ngOnInit(): void {
  }
  getProductData(id : any){
    if(id){
      this.productData = this.products.filter((x : any) => x.id == id)
      this.productData = this.productData[0];
      console.log(this.productData)
      //$("#ForgotPassword").modal('hide');
      $("#rooms-view").modal('show');
    }
  }
  setRoomCheckout(){
    this.productService.updateCart(false);
    $("#rooms-view").modal('hide');
    this.router.navigateByUrl('/cart');
  }
}
