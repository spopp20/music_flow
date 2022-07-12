import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongCreateNestedOneWithoutTagsInput } from "../inputs/SongCreateNestedOneWithoutTagsInput";
import { TagCreateNestedOneWithoutSongsInput } from "../inputs/TagCreateNestedOneWithoutSongsInput";

@TypeGraphQL.InputType("SongTagsCreateInput", {
  isAbstract: true
})
export class SongTagsCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SongCreateNestedOneWithoutTagsInput, {
    nullable: true
  })
  song?: SongCreateNestedOneWithoutTagsInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutSongsInput, {
    nullable: true
  })
  tag?: TagCreateNestedOneWithoutSongsInput | undefined;
}
