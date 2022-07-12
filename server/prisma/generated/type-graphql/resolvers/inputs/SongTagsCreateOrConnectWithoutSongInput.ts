import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongTagsCreateWithoutSongInput } from "../inputs/SongTagsCreateWithoutSongInput";
import { SongTagsWhereUniqueInput } from "../inputs/SongTagsWhereUniqueInput";

@TypeGraphQL.InputType("SongTagsCreateOrConnectWithoutSongInput", {
  isAbstract: true
})
export class SongTagsCreateOrConnectWithoutSongInput {
  @TypeGraphQL.Field(_type => SongTagsWhereUniqueInput, {
    nullable: false
  })
  where!: SongTagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongTagsCreateWithoutSongInput, {
    nullable: false
  })
  create!: SongTagsCreateWithoutSongInput;
}
