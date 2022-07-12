import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateNestedOneWithoutTagsInput } from "../inputs/SongCreateNestedOneWithoutTagsInput";

@TypeGraphQL.InputType("SongTagsCreateWithoutTagInput", {
  isAbstract: true
})
export class SongTagsCreateWithoutTagInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SongCreateNestedOneWithoutTagsInput, {
    nullable: true
  })
  song?: SongCreateNestedOneWithoutTagsInput | undefined;
}
