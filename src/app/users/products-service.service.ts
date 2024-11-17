import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  private myData = new BehaviorSubject(true);
  allProducts : any = [
    {
      id : 1,
      name : 'Main course',
      products : [
        {
          id : 1,
          name : 'Mushroom Do Pyaaz',
          price : '250.00',
          description : 'Some product description will go here.',
          image : 'product(1).jpeg'
        },
        {
          id : 2,
          name : 'Paneer Do Pyaaz',
          price : '260.00',
          description : 'Some product description will go here.',
          image : 'product(1).jpeg'
        },
        {
          id : 3,
          name : 'Paneer Mushroom Masala',
          price : '270.00',
          description : 'Some product description will go here.',
          image : 'product(1).jpeg'
        },
        {
          id : 4,
          name : 'Paneer Peshawari',
          price : '330.00',
          description : 'Some product description will go here.',
          image : 'product(1).jpeg'
        },
        {
          id : 5,
          name : 'Kaju Curry',
          price : '260.00',
          description : 'Some product description will go here.',
          image : 'product(1).jpeg'
        },
        {
          id : 6,
          name : 'Dal Fry',
          price : '175.00',
          description : 'Some product description will go here.',
          image : 'product(1).jpeg'
        }
      ],
      image : '2020-11-11-19-20-00GujaratiCategory.png'
    },
    {
      id : 2,
      name : 'Punjabi Plaza',
      products : [
        {
          id : 7,
          name : 'Harabhara Kabab (6)pcs',
          price : '200.00',
          description : 'Some product description will go here.',
          image : 'product(1).jpeg'
        },
        {
          id : 8,
          name : 'Stuffed Tandoori Alo',
          price : '230.00',
          description : 'Some product description will go here.',
          image : 'product(1).jpeg'
        },
        {
          id : 9,
          name : 'Veg seekh kabab',
          price : '270.00',
          description : 'Some product description will go here.',
          image : 'product(1).jpeg'
        },
        {
          id : 10,
          name : 'Paneer malai tikka',
          price : '280.00',
          description : 'Some product description will go here.',
          image : 'product(1).jpeg'
        },
        {
          id : 11,
          name : 'Paneer Tikka Achari',
          price : '250.00',
          description : 'Some product description will go here.',
          image : 'product(1).jpeg'
        },
        {
          id : 12,
          name : 'Paneer Tikka',
          price : '270.00',
          description : 'Some product description will go here.',
          image : 'product(1).jpeg'
        }
      ],
      image : '2020-11-11-19-20-25PunjabiCategory.png'
    }
    ,
    {
      id : 3,
      name : 'South Indian',
      products : [
        {
          id : 13,
          name : 'Sheera',
          price : 80,
          description : 'Some product description will go here.',
          image : 'product(1).jpeg'
        },
        {
          id : 14,
          name : 'Upama / Rawa Kichhdi',
          price : 100,
          description : 'Some product description will go here.',
          image : 'product(2).jpeg'
        },
        {
          id : 15,
          name : 'Medu vada',
          price : 120,
          description : 'Some product description will go here.',
          image : 'product(3).jpeg'
        },
        {
          id : 16,
          name : 'Puri Bhaji',
          price : 150,
          description : 'Some product description will go here.',
          image : 'product(4).jpeg'
        }
      ],
      image : '2020-11-11-19-20-37AllDaySnacksCategory.png'
    },
    {
      id: 4,
      name : 'Pav Bhaji',
      products : [
        {
          id : 17,
          name : 'Butter Pav Bhaji',
          price : 120,
          description : 'Some product description will go here.',
          image : 'product(1).jpeg'
        },
        {
          id : 18,
          name : 'Cheese Pav bhaji',
          price : 140,
          description : 'Some product description will go here.',
          image : 'product(2).jpeg'
        },
        {
          id : 19,
          name : 'Masala Pav (2 pcs)',
          price : 100,
          description : 'Some product description will go here.',
          image : 'product(3).jpeg'
        },
        {
          id : 16,
          name : 'Butter Pav (1 pc)',
          price : 20,
          description : 'Some product description will go here.',
          image : 'product(4).jpeg'
        }
      ],
      image : '2020-11-11-19-20-37AllDaySnacksCategory.png'
    }
  ]
  constructor() { }
  getSouthProducts() {
    const products : any = [
      {
        id : 1,
        name : 'Sheera',
        price : 80,
        description : 'Some product description will go here.',
        category : 1,
        image : 'product(1).jpeg'
      },
      {
        id : 2,
        name : 'Upama / Rawa Kichhdi',
        price : 100,
        description : 'Some product description will go here.',
        category : 1,
        image : 'product(2).jpeg'
      },
      {
        id : 3,
        name : 'Medu vada',
        price : 120,
        description : 'Some product description will go here.',
        category : 1,
        image : 'product(3).jpeg'
      },
      {
        id : 4,
        name : 'Puri Bhaji',
        price : 150,
        description : 'Some product description will go here.',
        category : 1,
        image : 'product(4).jpeg'
      }
    ];
    return this.allProducts;
  }
  addToCart() : Observable<any>{
    return observableOf(true);
  }
  getCartStatus(): Observable<boolean> {
    return this.myData;
  }
  updateCart(data){
    this.myData.next(data);
  }
}
