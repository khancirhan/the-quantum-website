import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotFoundError } from 'src/app/error-handler/errors/not-found-error';
import { UserQuery } from 'src/app/shared/models/user-query';
import { UserQueryService } from 'src/app/shared/services/user-query.service';

@Component({
  selector: 'app-user-query-detail',
  templateUrl: './user-query-detail.component.html',
  styleUrls: ['./user-query-detail.component.scss'],
})
export class UserQueryDetailComponent implements OnInit {
  userQuery: UserQuery = new UserQuery();

  constructor(
    private userQueryService: UserQueryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.userQueryService.getById(id).subscribe(
      (userQuery) => {
        this.userQuery = userQuery;
      },
      (error) => {
        if (error instanceof NotFoundError)
          this.router.navigate(['/page-not-found']);
      }
    );
  }
}
