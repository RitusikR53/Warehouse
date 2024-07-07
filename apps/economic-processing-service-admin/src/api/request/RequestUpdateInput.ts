import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { InventoryWhereUniqueInput } from "../inventory/InventoryWhereUniqueInput";

export type RequestUpdateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  inventory?: InventoryWhereUniqueInput | null;
  quantity?: number | null;
  status?: "Option1" | null;
};
