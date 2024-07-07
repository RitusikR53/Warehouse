import { Inventory } from "../inventory/Inventory";

export type Storekeeper = {
  createdAt: Date;
  email: string | null;
  id: string;
  inventories?: Array<Inventory>;
  name: string | null;
  updatedAt: Date;
};
