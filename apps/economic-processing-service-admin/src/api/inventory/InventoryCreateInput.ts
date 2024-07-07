import { RequestCreateNestedManyWithoutInventoriesInput } from "./RequestCreateNestedManyWithoutInventoriesInput";
import { ReservationQueueCreateNestedManyWithoutInventoriesInput } from "./ReservationQueueCreateNestedManyWithoutInventoriesInput";
import { StorekeeperWhereUniqueInput } from "../storekeeper/StorekeeperWhereUniqueInput";

export type InventoryCreateInput = {
  itemName?: string | null;
  quantity?: number | null;
  requests?: RequestCreateNestedManyWithoutInventoriesInput;
  reservationQueues?: ReservationQueueCreateNestedManyWithoutInventoriesInput;
  storekeeper?: StorekeeperWhereUniqueInput | null;
};
