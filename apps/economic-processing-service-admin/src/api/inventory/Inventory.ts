import { Request } from "../request/Request";
import { ReservationQueue } from "../reservationQueue/ReservationQueue";
import { Storekeeper } from "../storekeeper/Storekeeper";

export type Inventory = {
  createdAt: Date;
  id: string;
  itemName: string | null;
  quantity: number | null;
  requests?: Array<Request>;
  reservationQueues?: Array<ReservationQueue>;
  storekeeper?: Storekeeper | null;
  updatedAt: Date;
};
