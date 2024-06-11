import { OrderCreateNestedManyWithoutItemsInput } from "./OrderCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  available?: boolean | null;
  description?: string | null;
  orders?: OrderCreateNestedManyWithoutItemsInput;
  price?: number | null;
  title?: string | null;
};
