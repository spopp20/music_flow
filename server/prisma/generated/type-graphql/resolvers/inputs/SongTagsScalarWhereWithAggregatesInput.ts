import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("SongTagsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class SongTagsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SongTagsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SongTagsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SongTagsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SongTagsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SongTagsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  songId?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  tagId?: IntNullableWithAggregatesFilter | undefined;
}
