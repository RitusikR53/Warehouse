import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RequestListRelationFilter } from "../request/RequestListRelationFilter";
import { ReservationQueueListRelationFilter } from "../reservationQueue/ReservationQueueListRelationFilter";

export type EmployeeWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  requests?: RequestListRelationFilter;
  reservationQueues?: ReservationQueueListRelationFilter;
};
