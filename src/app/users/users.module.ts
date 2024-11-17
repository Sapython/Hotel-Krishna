import { SlickCarouselModule } from 'ngx-slick-carousel';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SingleDishComponent } from './single-dish/single-dish.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { RoomsComponent } from './rooms/rooms.component';
import { SingleRoomComponent } from './rooms/single-room/single-room.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component';
import { OrderDetailsComponent } from './cart/checkout/order-details/order-details.component';
import { LoginComponent } from './login/login.component';
import { TrackOrderComponent } from './cart/checkout/track-order/track-order.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    SingleDishComponent,
    CategoryPageComponent,
    CartComponent,
    RoomsComponent,
    SingleRoomComponent,
    CheckoutComponent,
    ContactusComponent,
    OrderDetailsComponent,
    LoginComponent,
    TrackOrderComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: RoomsComponent  },
      { path: 'cart', component: CartComponent },
      { path: 'rooms', component : CategoryPageComponent},
      { path: 'checkout', component : CheckoutComponent },
      { path: 'contact-us', component: ContactusComponent },
      { path: 'order', component: OrderDetailsComponent },
      { path: 'track-order', component: TrackOrderComponent },
      { path: 'sign-up', component: LoginComponent }
    ])
  ]
})
export class UsersModule { }
