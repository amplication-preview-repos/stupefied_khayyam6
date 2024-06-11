import { Item } from "../item/Item";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  item?: Item | null;
  quantity: number | null;
  status: string | null;
  totalPrice: number | null;
  updatedAt: Date;
  user?: User | null;
};
