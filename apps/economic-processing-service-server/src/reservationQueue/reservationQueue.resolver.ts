import * as graphql from "@nestjs/graphql";
import { ReservationQueueResolverBase } from "./base/reservationQueue.resolver.base";
import { ReservationQueue } from "./base/ReservationQueue";
import { ReservationQueueService } from "./reservationQueue.service";

@graphql.Resolver(() => ReservationQueue)
export class ReservationQueueResolver extends ReservationQueueResolverBase {
  constructor(protected readonly service: ReservationQueueService) {
    super(service);
  }
}
