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
    { id: 1, name: 'Margarita', ingredients: ['Tequila', 'Lime', 'Triple sec'], price: 10 },
    { id: 2, name: 'Mojito', ingredients: ['Rum', 'Mint', 'Sugar'], price: 8 },
  ];

  private orders: Order[] = [];
  
  // Get the list of cocktails
  getCocktails(): Observable<{ id: number; name: string; ingredients: string[]; price: number }[]> {
    return of(this.cocktails);
  }

  // Place a new order
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

