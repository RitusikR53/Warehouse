import { Module } from "@nestjs/common";
import { ReservationQueueModuleBase } from "./base/reservationQueue.module.base";
import { ReservationQueueService } from "./reservationQueue.service";
import { ReservationQueueController } from "./reservationQueue.controller";
import { ReservationQueueResolver } from "./reservationQueue.resolver";

@Module({
  imports: [ReservationQueueModuleBase],
  controllers: [ReservationQueueController],
  providers: [ReservationQueueService, ReservationQueueResolver],
  exports: [ReservationQueueService],
})
export class ReservationQueueModule {}
