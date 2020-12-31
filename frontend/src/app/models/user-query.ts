export class UserQuery {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(init?: Partial<UserQuery>) {
    Object.assign(this, init);
  }
}
