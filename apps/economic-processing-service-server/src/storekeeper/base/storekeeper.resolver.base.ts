/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Storekeeper } from "./Storekeeper";
import { StorekeeperCountArgs } from "./StorekeeperCountArgs";
import { StorekeeperFindManyArgs } from "./StorekeeperFindManyArgs";
import { StorekeeperFindUniqueArgs } from "./StorekeeperFindUniqueArgs";
import { CreateStorekeeperArgs } from "./CreateStorekeeperArgs";
import { UpdateStorekeeperArgs } from "./UpdateStorekeeperArgs";
import { DeleteStorekeeperArgs } from "./DeleteStorekeeperArgs";
import { InventoryFindManyArgs } from "../../inventory/base/InventoryFindManyArgs";
import { Inventory } from "../../inventory/base/Inventory";
import { StorekeeperService } from "../storekeeper.service";
@graphql.Resolver(() => Storekeeper)
export class StorekeeperResolverBase {
  constructor(protected readonly service: StorekeeperService) {}

  async _storekeepersMeta(
    @graphql.Args() args: StorekeeperCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Storekeeper])
  async storekeepers(
    @graphql.Args() args: StorekeeperFindManyArgs
  ): Promise<Storekeeper[]> {
    return this.service.storekeepers(args);
  }

  @graphql.Query(() => Storekeeper, { nullable: true })
  async storekeeper(
    @graphql.Args() args: StorekeeperFindUniqueArgs
  ): Promise<Storekeeper | null> {
    const result = await this.service.storekeeper(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Storekeeper)
  async createStorekeeper(
    @graphql.Args() args: CreateStorekeeperArgs
  ): Promise<Storekeeper> {
    return await this.service.createStorekeeper({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Storekeeper)
  async updateStorekeeper(
    @graphql.Args() args: UpdateStorekeeperArgs
  ): Promise<Storekeeper | null> {
    try {
      return await this.service.updateStorekeeper({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Storekeeper)
  async deleteStorekeeper(
    @graphql.Args() args: DeleteStorekeeperArgs
  ): Promise<Storekeeper | null> {
    try {
      return await this.service.deleteStorekeeper(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Inventory], { name: "inventories" })
  async findInventories(
    @graphql.Parent() parent: Storekeeper,
    @graphql.Args() args: InventoryFindManyArgs
  ): Promise<Inventory[]> {
    const results = await this.service.findInventories(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
