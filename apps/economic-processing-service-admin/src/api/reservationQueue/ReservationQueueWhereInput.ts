import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ReservationQueueWhereInput = {
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  inventory?: InventoryWhereUniqueInput;
  quantity?: IntNullableFilter;
  status?: "Option1";
};
