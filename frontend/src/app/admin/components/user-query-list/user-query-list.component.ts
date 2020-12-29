import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserQuery } from 'src/app/models/user-query';
import { UserQueryService } from 'src/app/services/user-query.service';
import { truncate } from '../../utils/common';

@Component({
  selector: 'app-user-query-list',
  templateUrl: './user-query-list.component.html',
  styleUrls: ['./user-query-list.component.scss'],
})
export class UserQueryListComponent implements OnInit {
  userQueries: UserQuery[] = [];
  currentPage: number = 1;
  limit: number = 25;
  totalItems: number = 0;

  constructor(
    private userQueryService: UserQueryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      const { page, limit } = queryParams;
      this.getUserQueries(page || this.currentPage, limit || this.limit);
    });
  }

  getUserQueries(page: number, limit: number): void {
    this.userQueryService
      .getAll(page, limit)
      .subscribe(({ items, totalItems }) => {
        this.userQueries = items;
        this.totalItems = totalItems;
      });
  }

  truncateMessage(message: string): string {
    return truncate(message, 4);
  }

  changePage(page: number): void {
    this.currentPage = page;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page, limit: this.limit },
    });
  }
}
