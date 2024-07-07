import { InventoryCreateNestedManyWithoutStorekeepersInput } from "./InventoryCreateNestedManyWithoutStorekeepersInput";

export type StorekeeperCreateInput = {
  email?: string | null;
  inventories?: InventoryCreateNestedManyWithoutStorekeepersInput;
  name?: string | null;
};
