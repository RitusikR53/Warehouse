import { ReservationQueue as TReservationQueue } from "../api/reservationQueue/ReservationQueue";

export const RESERVATIONQUEUE_TITLE_FIELD = "id";

export const ReservationQueueTitle = (record: TReservationQueue): string => {
  return record.id?.toString() || String(record.id);
};
