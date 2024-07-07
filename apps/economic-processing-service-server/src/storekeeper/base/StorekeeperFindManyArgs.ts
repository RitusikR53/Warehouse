/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StorekeeperWhereInput } from "./StorekeeperWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { StorekeeperOrderByInput } from "./StorekeeperOrderByInput";

@ArgsType()
class StorekeeperFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => StorekeeperWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => StorekeeperWhereInput, { nullable: true })
  @Type(() => StorekeeperWhereInput)
  where?: StorekeeperWhereInput;

  @ApiProperty({
    required: false,
    type: [StorekeeperOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [StorekeeperOrderByInput], { nullable: true })
  @Type(() => StorekeeperOrderByInput)
  orderBy?: Array<StorekeeperOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { StorekeeperFindManyArgs as StorekeeperFindManyArgs };
