import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserQuery } from 'src/app/models/user-query';
import { UserQueryService } from 'src/app/services/user-query.service';

@Component({
  selector: 'app-user-query-detail',
  templateUrl: './user-query-detail.component.html',
  styleUrls: ['./user-query-detail.component.scss'],
})
export class UserQueryDetailComponent implements OnInit {
  userQuery: UserQuery = new UserQuery();

  constructor(
    private userQueryService: UserQueryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userQueryService.getById(id).subscribe((userQuery) => {
      this.userQuery = userQuery;
    });
  }
}
