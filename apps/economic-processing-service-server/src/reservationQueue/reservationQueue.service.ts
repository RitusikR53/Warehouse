import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReservationQueueServiceBase } from "./base/reservationQueue.service.base";

@Injectable()
export class ReservationQueueService extends ReservationQueueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
