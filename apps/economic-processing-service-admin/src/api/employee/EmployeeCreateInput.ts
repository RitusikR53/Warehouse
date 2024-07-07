import { RequestCreateNestedManyWithoutEmployeesInput } from "./RequestCreateNestedManyWithoutEmployeesInput";
import { ReservationQueueCreateNestedManyWithoutEmployeesInput } from "./ReservationQueueCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  email?: string | null;
  name?: string | null;
  requests?: RequestCreateNestedManyWithoutEmployeesInput;
  reservationQueues?: ReservationQueueCreateNestedManyWithoutEmployeesInput;
};
