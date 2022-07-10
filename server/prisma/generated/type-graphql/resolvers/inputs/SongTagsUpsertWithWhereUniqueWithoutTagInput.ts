import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongTagsCreateWithoutTagInput } from "../inputs/SongTagsCreateWithoutTagInput";
import { SongTagsUpdateWithoutTagInput } from "../inputs/SongTagsUpdateWithoutTagInput";
import { SongTagsWhereUniqueInput } from "../inputs/SongTagsWhereUniqueInput";

@TypeGraphQL.InputType("SongTagsUpsertWithWhereUniqueWithoutTagInput", {
  isAbstract: true
})
export class SongTagsUpsertWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => SongTagsWhereUniqueInput, {
    nullable: false
  })
  where!: SongTagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongTagsUpdateWithoutTagInput, {
    nullable: false
  })
  update!: SongTagsUpdateWithoutTagInput;

  @TypeGraphQL.Field(_type => SongTagsCreateWithoutTagInput, {
    nullable: false
  })
  create!: SongTagsCreateWithoutTagInput;
}
