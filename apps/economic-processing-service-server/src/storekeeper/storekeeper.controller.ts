import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StorekeeperService } from "./storekeeper.service";
import { StorekeeperControllerBase } from "./base/storekeeper.controller.base";

@swagger.ApiTags("storekeepers")
@common.Controller("storekeepers")
export class StorekeeperController extends StorekeeperControllerBase {
  constructor(protected readonly service: StorekeeperService) {
    super(service);
  }
}
