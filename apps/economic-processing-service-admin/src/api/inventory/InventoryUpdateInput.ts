import { RequestUpdateManyWithoutInventoriesInput } from "./RequestUpdateManyWithoutInventoriesInput";
import { ReservationQueueUpdateManyWithoutInventoriesInput } from "./ReservationQueueUpdateManyWithoutInventoriesInput";
import { StorekeeperWhereUniqueInput } from "../storekeeper/StorekeeperWhereUniqueInput";

export type InventoryUpdateInput = {
  itemName?: string | null;
  quantity?: number | null;
  requests?: RequestUpdateManyWithoutInventoriesInput;
  reservationQueues?: ReservationQueueUpdateManyWithoutInventoriesInput;
  storekeeper?: StorekeeperWhereUniqueInput | null;
};
