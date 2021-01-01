export class Product {
  _id: string;
  name: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(init?: Partial<Product>) {
    Object.assign(this, init);
  }
}

export const tqAir: Product = new Product({
  name: 'TheQuantumAir',
  price: 999,
});

export const tqPro: Product = new Product({
  name: 'TheQuantumPro',
  price: 2499,
});
