import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../controllers/order.service';
import { Order } from '../../models/order';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-queue',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './order-queue.component.html',
  styleUrls: ['./order-queue.component.css']
})
export class OrderQueueComponent implements OnInit {
  
  orders: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.getOrders().subscribe(orders => this.orders = orders);
  }

  

  updateOrderStatus(orderId: number, status: 'pending' | 'preparing' | 'ready'): void {
    this.orderService.updateOrderStatus(orderId, status);
    this.loadOrders();
  }
}


