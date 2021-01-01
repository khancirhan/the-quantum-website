import { Component, OnInit } from '@angular/core';
import { UserQuery } from 'src/app/shared/models/user-query';
import { UserQueryService } from 'src/app/shared/services/user-query.service';
import { truncate } from '../../utils/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userQueries: UserQuery[] = [];

  constructor(private userQueryService: UserQueryService) {}

  ngOnInit(): void {
    this.userQueryService.getAll(1, 5).subscribe(({ items }) => {
      this.userQueries = items;
    });
  }

  truncateMessage(message: string): string {
    return truncate(message, 4);
  }
}
