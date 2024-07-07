import { RequestUpdateManyWithoutEmployeesInput } from "./RequestUpdateManyWithoutEmployeesInput";
import { ReservationQueueUpdateManyWithoutEmployeesInput } from "./ReservationQueueUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  email?: string | null;
  name?: string | null;
  requests?: RequestUpdateManyWithoutEmployeesInput;
  reservationQueues?: ReservationQueueUpdateManyWithoutEmployeesInput;
};
