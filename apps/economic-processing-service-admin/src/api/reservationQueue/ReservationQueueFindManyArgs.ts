import { ReservationQueueWhereInput } from "./ReservationQueueWhereInput";
import { ReservationQueueOrderByInput } from "./ReservationQueueOrderByInput";

export type ReservationQueueFindManyArgs = {
  where?: ReservationQueueWhereInput;
  orderBy?: Array<ReservationQueueOrderByInput>;
  skip?: number;
  take?: number;
};
