import * as graphql from "@nestjs/graphql";
import { StorekeeperResolverBase } from "./base/storekeeper.resolver.base";
import { Storekeeper } from "./base/Storekeeper";
import { StorekeeperService } from "./storekeeper.service";

@graphql.Resolver(() => Storekeeper)
export class StorekeeperResolver extends StorekeeperResolverBase {
  constructor(protected readonly service: StorekeeperService) {
    super(service);
  }
}
