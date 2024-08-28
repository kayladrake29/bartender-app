import { Component } from '@angular/core';
import { OrderService } from '../../controllers/order.service';
import { Order } from '../../models/order';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-cocktail-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
 
  templateUrl: './cocktail-menu.component.html',
  styleUrl: './cocktail-menu.component.css'
})


export class CocktailMenuComponent {

  cocktails: { id: number; name: string; ingredients: string[]; price: number }[] = [];
  orders: Order[] = [];

 constructor(private orderService: OrderService) { }
 ngOnInit(): void {
  this.loadCocktails();
}

 loadCocktails() {
  this.orderService.getCocktails().subscribe(cocktails => this.cocktails = cocktails);
 }

 loadOrders (){
  this.orderService.getOrders();
 }

placeOrder(cocktailName: string) {
  this.orderService.placeOrder(cocktailName).subscribe(order => {
    this.orders.push(order);
    alert(`Order placed! Your order id is ${order.id}`);
    console.log(this.loadOrders());
  })}


updateOrderStatus(orderId: number, status: 'pending' | 'preparing' | 'ready') {
  this.orderService.updateOrderStatus(orderId, status); 

}

}







