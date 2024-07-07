import { SortOrder } from "../../util/SortOrder";

export type ReservationQueueOrderByInput = {
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  id?: SortOrder;
  inventoryId?: SortOrder;
  quantity?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
