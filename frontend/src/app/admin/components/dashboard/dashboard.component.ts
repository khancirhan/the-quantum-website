import { Component, OnInit } from '@angular/core';
import { UserQueryService } from 'src/app/services/user-query.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private userQueryService: UserQueryService) {}

  ngOnInit(): void {
    this.userQueryService.getAll().subscribe((userQueries) => {
      console.log(userQueries);
    });
  }
}
