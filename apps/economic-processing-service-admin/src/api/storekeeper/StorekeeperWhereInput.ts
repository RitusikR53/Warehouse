import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InventoryListRelationFilter } from "../inventory/InventoryListRelationFilter";

export type StorekeeperWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  inventories?: InventoryListRelationFilter;
  name?: StringNullableFilter;
};
