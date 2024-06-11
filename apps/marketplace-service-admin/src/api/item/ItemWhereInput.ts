import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ItemWhereInput = {
  available?: BooleanNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  price?: FloatNullableFilter;
  title?: StringNullableFilter;
};
