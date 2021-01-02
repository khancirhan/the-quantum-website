import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/shared/models/order';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  currentPage: number = 1;
  limit: number = 25;
  totalItems: number = 0;

  constructor(private orderService: OrderService, private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
