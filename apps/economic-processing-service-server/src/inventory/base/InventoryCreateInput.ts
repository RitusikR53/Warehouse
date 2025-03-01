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
import {
  IsString,
  MaxLength,
  IsOptional,
  IsInt,
  Min,
  Max,
  ValidateNested,
} from "class-validator";
import { RequestCreateNestedManyWithoutInventoriesInput } from "./RequestCreateNestedManyWithoutInventoriesInput";
import { Type } from "class-transformer";
import { ReservationQueueCreateNestedManyWithoutInventoriesInput } from "./ReservationQueueCreateNestedManyWithoutInventoriesInput";
import { StorekeeperWhereUniqueInput } from "../../storekeeper/base/StorekeeperWhereUniqueInput";

@InputType()
class InventoryCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  itemName?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity?: number | null;

  @ApiProperty({
    required: false,
    type: () => RequestCreateNestedManyWithoutInventoriesInput,
  })
  @ValidateNested()
  @Type(() => RequestCreateNestedManyWithoutInventoriesInput)
  @IsOptional()
  @Field(() => RequestCreateNestedManyWithoutInventoriesInput, {
    nullable: true,
  })
  requests?: RequestCreateNestedManyWithoutInventoriesInput;

  @ApiProperty({
    required: false,
    type: () => ReservationQueueCreateNestedManyWithoutInventoriesInput,
  })
  @ValidateNested()
  @Type(() => ReservationQueueCreateNestedManyWithoutInventoriesInput)
  @IsOptional()
  @Field(() => ReservationQueueCreateNestedManyWithoutInventoriesInput, {
    nullable: true,
  })
  reservationQueues?: ReservationQueueCreateNestedManyWithoutInventoriesInput;

  @ApiProperty({
    required: false,
    type: () => StorekeeperWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StorekeeperWhereUniqueInput)
  @IsOptional()
  @Field(() => StorekeeperWhereUniqueInput, {
    nullable: true,
  })
  storekeeper?: StorekeeperWhereUniqueInput | null;
}

export { InventoryCreateInput as InventoryCreateInput };
