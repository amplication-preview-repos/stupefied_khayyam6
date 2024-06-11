import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  quantity?: SortOrder;
  status?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
