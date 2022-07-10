import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateWithoutTagsInput } from "../inputs/SongCreateWithoutTagsInput";
import { SongUpdateWithoutTagsInput } from "../inputs/SongUpdateWithoutTagsInput";

@TypeGraphQL.InputType("SongUpsertWithoutTagsInput", {
  isAbstract: true
})
export class SongUpsertWithoutTagsInput {
  @TypeGraphQL.Field(_type => SongUpdateWithoutTagsInput, {
    nullable: false
  })
  update!: SongUpdateWithoutTagsInput;

  @TypeGraphQL.Field(_type => SongCreateWithoutTagsInput, {
    nullable: false
  })
  create!: SongCreateWithoutTagsInput;
}
