import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongTagsUpdateWithoutTagInput } from "../inputs/SongTagsUpdateWithoutTagInput";
import { SongTagsWhereUniqueInput } from "../inputs/SongTagsWhereUniqueInput";

@TypeGraphQL.InputType("SongTagsUpdateWithWhereUniqueWithoutTagInput", {
  isAbstract: true
})
export class SongTagsUpdateWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => SongTagsWhereUniqueInput, {
    nullable: false
  })
  where!: SongTagsWhereUniqueInput;

  @TypeGraphQL.Field(_type => SongTagsUpdateWithoutTagInput, {
    nullable: false
  })
  data!: SongTagsUpdateWithoutTagInput;
}
