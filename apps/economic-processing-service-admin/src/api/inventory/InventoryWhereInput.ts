import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RequestListRelationFilter } from "../request/RequestListRelationFilter";
import { ReservationQueueListRelationFilter } from "../reservationQueue/ReservationQueueListRelationFilter";
import { StorekeeperWhereUniqueInput } from "../storekeeper/StorekeeperWhereUniqueInput";

export type InventoryWhereInput = {
  id?: StringFilter;
  itemName?: StringNullableFilter;
  quantity?: IntNullableFilter;
  requests?: RequestListRelationFilter;
  reservationQueues?: ReservationQueueListRelationFilter;
  storekeeper?: StorekeeperWhereUniqueInput;
};
