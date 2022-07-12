import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongTagsUpdateWithoutSongInput } from "../inputs/SongTagsUpdateWithoutSongInput";
import { SongTagsWhereUniqueInput } from "../inputs/SongTagsWhereUniqueInput";

@TypeGraphQL.InputType("SongTagsUpdateWithWhereUniqueWithoutSongInput", {
  isAbstract: true
})
export class SongTagsUpdateWithWhereUniqueWithoutSongInput {
  @TypeGraphQL.Field(_type => SongTagsWhereUniqueInput, {
    nullable: false
  })
  where!: SongTagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongTagsUpdateWithoutSongInput, {
    nullable: false
  })
  data!: SongTagsUpdateWithoutSongInput;
}
