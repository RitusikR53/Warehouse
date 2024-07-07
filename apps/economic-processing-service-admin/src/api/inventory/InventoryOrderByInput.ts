import { SortOrder } from "../../util/SortOrder";

export type InventoryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  itemName?: SortOrder;
  quantity?: SortOrder;
  storekeeperId?: SortOrder;
  updatedAt?: SortOrder;
};
