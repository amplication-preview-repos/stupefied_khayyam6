import { Order } from "../order/Order";

export type Item = {
  available: boolean | null;
  createdAt: Date;
  description: string | null;
  id: string;
  orders?: Array<Order>;
  price: number | null;
  title: string | null;
  updatedAt: Date;
};
