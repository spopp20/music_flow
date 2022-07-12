import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongTagsCreateWithoutSongInput } from "../inputs/SongTagsCreateWithoutSongInput";
import { SongTagsUpdateWithoutSongInput } from "../inputs/SongTagsUpdateWithoutSongInput";
import { SongTagsWhereUniqueInput } from "../inputs/SongTagsWhereUniqueInput";

@TypeGraphQL.InputType("SongTagsUpsertWithWhereUniqueWithoutSongInput", {
  isAbstract: true
})
export class SongTagsUpsertWithWhereUniqueWithoutSongInput {
  @TypeGraphQL.Field(_type => SongTagsWhereUniqueInput, {
    nullable: false
  })
  where!: SongTagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongTagsUpdateWithoutSongInput, {
    nullable: false
  })
  update!: SongTagsUpdateWithoutSongInput;

  @TypeGraphQL.Field(_type => SongTagsCreateWithoutSongInput, {
    nullable: false
  })
  create!: SongTagsCreateWithoutSongInput;
}
