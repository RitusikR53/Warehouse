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
  IsOptional,
  ValidateNested,
  MaxLength,
} from "class-validator";
import { InventoryUpdateManyWithoutStorekeepersInput } from "./InventoryUpdateManyWithoutStorekeepersInput";
import { Type } from "class-transformer";

@InputType()
class StorekeeperUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: () => InventoryUpdateManyWithoutStorekeepersInput,
  })
  @ValidateNested()
  @Type(() => InventoryUpdateManyWithoutStorekeepersInput)
  @IsOptional()
  @Field(() => InventoryUpdateManyWithoutStorekeepersInput, {
    nullable: true,
  })
  inventories?: InventoryUpdateManyWithoutStorekeepersInput;

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
  name?: string | null;
}

export { StorekeeperUpdateInput as StorekeeperUpdateInput };
