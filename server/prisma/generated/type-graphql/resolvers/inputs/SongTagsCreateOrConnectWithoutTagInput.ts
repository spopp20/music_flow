import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongTagsCreateWithoutTagInput } from "../inputs/SongTagsCreateWithoutTagInput";
import { SongTagsWhereUniqueInput } from "../inputs/SongTagsWhereUniqueInput";

@TypeGraphQL.InputType("SongTagsCreateOrConnectWithoutTagInput", {
  isAbstract: true
})
export class SongTagsCreateOrConnectWithoutTagInput {
  @TypeGraphQL.Field(_type => SongTagsWhereUniqueInput, {
    nullable: false
  })
  where!: SongTagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongTagsCreateWithoutTagInput, {
    nullable: false
  })
  create!: SongTagsCreateWithoutTagInput;
}
