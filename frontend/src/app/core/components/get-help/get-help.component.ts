import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserQuery } from 'src/app/shared/models/user-query';
import { UserQueryService } from 'src/app/shared/services/user-query.service';

@Component({
  selector: 'app-get-help',
  templateUrl: './get-help.component.html',
  styleUrls: ['./get-help.component.scss'],
})
export class GetHelpComponent implements OnInit {
  constructor(private userQueryService: UserQueryService) {}

  ngOnInit(): void {
    this.userQueryService.getAll().subscribe((a) => {
      console.log(a);
    });
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    this.createUserQuery(form.value);
  }

  createUserQuery(userQuery: UserQuery): void {
    this.userQueryService.create(userQuery).subscribe(
      (userQuery) => {
        console.log(userQuery);
      },
      (error) => console.log(error)
    );
  }
}
