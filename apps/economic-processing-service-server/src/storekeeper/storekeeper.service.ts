import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StorekeeperServiceBase } from "./base/storekeeper.service.base";

@Injectable()
export class StorekeeperService extends StorekeeperServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
