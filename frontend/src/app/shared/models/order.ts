export class Order {
  name: string;
  contact: string;
  email: string;
  country: string;
  shippingAddress: string;
  product: string;
  amount: number;
  payment: {
    option: string;
    isPaid: string;
    paymentId: string;
  };
  createdAt: Date;
  updatedAt: Date;

  constructor(init?: Partial<Order>) {
    Object.assign(this, init);
  }
}
