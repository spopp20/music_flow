import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";

@TypeGraphQL.InputType("EventSongScalarWhereInput", {
  isAbstract: true
})
export class EventSongScalarWhereInput {
  @TypeGraphQL.Field(_type => [EventSongScalarWhereInput], {
    nullable: true
  })
  AND?: EventSongScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongScalarWhereInput], {
    nullable: true
  })
  OR?: EventSongScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EventSongScalarWhereInput], {
    nullable: true
  })
  NOT?: EventSongScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  eventId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  songId?: IntNullableFilter | undefined;
}
