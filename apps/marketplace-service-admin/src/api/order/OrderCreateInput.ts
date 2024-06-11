import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  item?: ItemWhereUniqueInput | null;
  quantity?: number | null;
  status?: string | null;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
};
