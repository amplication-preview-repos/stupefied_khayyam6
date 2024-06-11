import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  available?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
