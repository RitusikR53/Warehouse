import { Request } from "../request/Request";
import { ReservationQueue } from "../reservationQueue/ReservationQueue";

export type Employee = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  requests?: Array<Request>;
  reservationQueues?: Array<ReservationQueue>;
  updatedAt: Date;
};
