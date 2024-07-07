/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { StorekeeperService } from "../storekeeper.service";
import { StorekeeperCreateInput } from "./StorekeeperCreateInput";
import { Storekeeper } from "./Storekeeper";
import { Request } from "../../request/base/Request";
import { StorekeeperFindManyArgs } from "./StorekeeperFindManyArgs";
import { StorekeeperWhereUniqueInput } from "./StorekeeperWhereUniqueInput";
import { StorekeeperUpdateInput } from "./StorekeeperUpdateInput";
import { InventoryFindManyArgs } from "../../inventory/base/InventoryFindManyArgs";
import { Inventory } from "../../inventory/base/Inventory";
import { InventoryWhereUniqueInput } from "../../inventory/base/InventoryWhereUniqueInput";

export class StorekeeperControllerBase {
  constructor(protected readonly service: StorekeeperService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Storekeeper })
  async createStorekeeper(
    @common.Body() data: StorekeeperCreateInput
  ): Promise<Storekeeper> {
    return await this.service.createStorekeeper({
      data: data,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Storekeeper] })
  @ApiNestedQuery(StorekeeperFindManyArgs)
  async storekeepers(@common.Req() request: Request): Promise<Storekeeper[]> {
    const args = plainToClass(StorekeeperFindManyArgs, request.query);
    return this.service.storekeepers({
      ...args,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Storekeeper })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async storekeeper(
    @common.Param() params: StorekeeperWhereUniqueInput
  ): Promise<Storekeeper | null> {
    const result = await this.service.storekeeper({
      where: params,
      select: {
        createdAt: true,
        email: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Storekeeper })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStorekeeper(
    @common.Param() params: StorekeeperWhereUniqueInput,
    @common.Body() data: StorekeeperUpdateInput
  ): Promise<Storekeeper | null> {
    try {
      return await this.service.updateStorekeeper({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Storekeeper })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStorekeeper(
    @common.Param() params: StorekeeperWhereUniqueInput
  ): Promise<Storekeeper | null> {
    try {
      return await this.service.deleteStorekeeper({
        where: params,
        select: {
          createdAt: true,
          email: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/inventories")
  @ApiNestedQuery(InventoryFindManyArgs)
  async findInventories(
    @common.Req() request: Request,
    @common.Param() params: StorekeeperWhereUniqueInput
  ): Promise<Inventory[]> {
    const query = plainToClass(InventoryFindManyArgs, request.query);
    const results = await this.service.findInventories(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        itemName: true,
        quantity: true,

        storekeeper: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/inventories")
  async connectInventories(
    @common.Param() params: StorekeeperWhereUniqueInput,
    @common.Body() body: InventoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventories: {
        connect: body,
      },
    };
    await this.service.updateStorekeeper({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/inventories")
  async updateInventories(
    @common.Param() params: StorekeeperWhereUniqueInput,
    @common.Body() body: InventoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventories: {
        set: body,
      },
    };
    await this.service.updateStorekeeper({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/inventories")
  async disconnectInventories(
    @common.Param() params: StorekeeperWhereUniqueInput,
    @common.Body() body: InventoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inventories: {
        disconnect: body,
      },
    };
    await this.service.updateStorekeeper({
      where: params,
      data,
      select: { id: true },
    });
  }
}
