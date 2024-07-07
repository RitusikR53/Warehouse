import { Employee } from "../employee/Employee";
import { Inventory } from "../inventory/Inventory";

export type ReservationQueue = {
  createdAt: Date;
  employee?: Employee | null;
  id: string;
  inventory?: Inventory | null;
  quantity: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
