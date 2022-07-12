import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateNestedOneWithoutSongsInput } from "../inputs/TagCreateNestedOneWithoutSongsInput";

@TypeGraphQL.InputType("SongTagsCreateWithoutSongInput", {
  isAbstract: true
})
export class SongTagsCreateWithoutSongInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutSongsInput, {
    nullable: true
  })
  tag?: TagCreateNestedOneWithoutSongsInput | undefined;
}
