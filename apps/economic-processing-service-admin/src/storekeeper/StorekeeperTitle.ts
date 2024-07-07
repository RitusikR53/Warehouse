import { Storekeeper as TStorekeeper } from "../api/storekeeper/Storekeeper";

export const STOREKEEPER_TITLE_FIELD = "name";

export const StorekeeperTitle = (record: TStorekeeper): string => {
  return record.name?.toString() || String(record.id);
};
