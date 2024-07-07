import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReservationQueueService } from "./reservationQueue.service";
import { ReservationQueueControllerBase } from "./base/reservationQueue.controller.base";

@swagger.ApiTags("reservationQueues")
@common.Controller("reservationQueues")
export class ReservationQueueController extends ReservationQueueControllerBase {
  constructor(protected readonly service: ReservationQueueService) {
    super(service);
  }
}
