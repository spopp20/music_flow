import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("EventSongScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class EventSongScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EventSongScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EventSongScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EventSongScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EventSongScalarWhereWithAggregatesInput[] | undefined;

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
  eventId?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  songId?: IntNullableWithAggregatesFilter | undefined;
}
