import { OrderUpdateManyWithoutItemsInput } from "./OrderUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  available?: boolean | null;
  description?: string | null;
  orders?: OrderUpdateManyWithoutItemsInput;
  price?: number | null;
  title?: string | null;
};
