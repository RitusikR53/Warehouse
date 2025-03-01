/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ReservationQueueWhereInput } from "./ReservationQueueWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ReservationQueueListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ReservationQueueWhereInput,
  })
  @ValidateNested()
  @Type(() => ReservationQueueWhereInput)
  @IsOptional()
  @Field(() => ReservationQueueWhereInput, {
    nullable: true,
  })
  every?: ReservationQueueWhereInput;

  @ApiProperty({
    required: false,
    type: () => ReservationQueueWhereInput,
  })
  @ValidateNested()
  @Type(() => ReservationQueueWhereInput)
  @IsOptional()
  @Field(() => ReservationQueueWhereInput, {
    nullable: true,
  })
  some?: ReservationQueueWhereInput;

  @ApiProperty({
    required: false,
    type: () => ReservationQueueWhereInput,
  })
  @ValidateNested()
  @Type(() => ReservationQueueWhereInput)
  @IsOptional()
  @Field(() => ReservationQueueWhereInput, {
    nullable: true,
  })
  none?: ReservationQueueWhereInput;
}
export { ReservationQueueListRelationFilter as ReservationQueueListRelationFilter };
