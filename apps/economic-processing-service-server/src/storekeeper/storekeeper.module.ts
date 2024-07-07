import { Module } from "@nestjs/common";
import { StorekeeperModuleBase } from "./base/storekeeper.module.base";
import { StorekeeperService } from "./storekeeper.service";
import { StorekeeperController } from "./storekeeper.controller";
import { StorekeeperResolver } from "./storekeeper.resolver";

@Module({
  imports: [StorekeeperModuleBase],
  controllers: [StorekeeperController],
  providers: [StorekeeperService, StorekeeperResolver],
  exports: [StorekeeperService],
})
export class StorekeeperModule {}
