import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SongTagsWhereInput } from "../inputs/SongTagsWhereInput";

@TypeGraphQL.InputType("SongTagsListRelationFilter", {
  isAbstract: true
})
export class SongTagsListRelationFilter {
  @TypeGraphQL.Field(_type => SongTagsWhereInput, {
    nullable: true
  })
  every?: SongTagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => SongTagsWhereInput, {
    nullable: true
  })
  some?: SongTagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => SongTagsWhereInput, {
    nullable: true
  })
  none?: SongTagsWhereInput | undefined;
}
