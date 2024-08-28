import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Order } from '../models/order';// Import the order model
import { CocktailMenuComponent } from '../views/cocktail-menu/cocktail-menu.component';
import { Cocktail } from '../models/cocktail';


@Injectable({
  providedIn: 'root',
})



export class OrderService {

  constructor() { }

  private cocktails= [
    { id: 1,name: 'Whiskey Sour', ingredients: ['Whiskey', 'Lemon Juice', 'Sugar', 'Egg White'], price: 13 },
  { id: 2, name: 'Bloody Mary', ingredients: ['Vodka', 'Tomato Juice', 'Lemon', 'Tabasco', 'Worcestershire Sauce'], price: 12 },
  { id: 3, name: 'Old Fashioned', ingredients: ['Bourbon', 'Bitters', 'Sugar', 'Orange Twist'], price: 15 },
  { id: 4, name: 'Cosmopolitan', ingredients: ['Vodka', 'Triple sec', 'Cranberry Juice', 'Lime'], price: 14 },
  { id: 5, name: 'Pina Colada', ingredients: ['White Rum', 'Coconut Cream', 'Pineapple Juice'], price: 13 },
  { id: 6, name: 'Martini', ingredients: ['Gin', 'Dry Vermouth', 'Olive'], price: 12 },
  { id: 7, name: 'Daiquiri', ingredients: ['White Rum', 'Lime', 'Sugar'], price: 11 },
 
  ];

  private orders: Order[] = [];
  
  getCocktails(): Observable<{ id: number; name: string; ingredients: string[]; price: number }[]> {
    return of(this.cocktails);
  }

  placeOrder(cocktailOrder: string): Observable<Order> {
    
    const newOrder: Order = {
      id: this.orders.length + 1,
      cocktailName: cocktailOrder,
      status: 'pending',
    };
    console.log(newOrder);
    this.orders.push(newOrder);
    return of(newOrder);
  }

  // Get all orders
  getOrders(): Observable<Order[]> {
    console.log("got the orders!");
    return of(this.orders);
    
  }


  updateOrderStatus(orderId: number, status: 'pending' | 'preparing' | 'ready'): void {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.status = status;
    }
    if (order?.status === 'ready') {
      const index = this.orders.indexOf(order);
      // if (index !== -1) {
      //   this.orders.splice(index, 1);
      // }
      alert(`Order ${order.cocktailName} is ready!`);
    }



  }
}

