import { StorekeeperWhereInput } from "./StorekeeperWhereInput";
import { StorekeeperOrderByInput } from "./StorekeeperOrderByInput";

export type StorekeeperFindManyArgs = {
  where?: StorekeeperWhereInput;
  orderBy?: Array<StorekeeperOrderByInput>;
  skip?: number;
  take?: number;
};
