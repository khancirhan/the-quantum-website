import { Component, OnInit } from '@angular/core';
import { UserQuery } from 'src/app/models/user-query';
import { UserQueryService } from 'src/app/services/user-query.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userQueries: UserQuery[] = [];

  constructor(private userQueryService: UserQueryService) {}

  ngOnInit(): void {
    this.userQueryService.getAll().subscribe((userQueries) => {
      this.userQueries = userQueries
      console.log(userQueries);
    });
  }
}
