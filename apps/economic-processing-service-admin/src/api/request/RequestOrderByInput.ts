import { SortOrder } from "../../util/SortOrder";

export type RequestOrderByInput = {
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  inventoryId?: SortOrder;
  quantity?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
