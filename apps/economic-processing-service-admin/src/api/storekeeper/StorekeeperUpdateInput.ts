import { InventoryUpdateManyWithoutStorekeepersInput } from "./InventoryUpdateManyWithoutStorekeepersInput";

export type StorekeeperUpdateInput = {
  email?: string | null;
  inventories?: InventoryUpdateManyWithoutStorekeepersInput;
  name?: string | null;
};
