import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/shared/models/order';
import { OrderService } from 'src/app/shared/services/order.service';
import { truncate } from '../../utils/common';

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

  constructor(
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      const { page, limit } = queryParams;
      this.getOrders(page || this.currentPage, limit || this.limit);
    });
  }

  getOrders(page: number, limit: number): void {
    this.orderService.getAll(page, limit).subscribe(({ items, totalItems }) => {
      this.orders = items;
      this.totalItems = totalItems;
    });
  }

  truncateAddress(address: string): string {
    return truncate(address, 4);
  }

  changePage(page: number): void {
    this.currentPage = page;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page, limit: this.limit },
    });
  }
}
