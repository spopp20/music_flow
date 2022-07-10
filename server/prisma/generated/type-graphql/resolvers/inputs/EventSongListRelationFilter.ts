import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventSongWhereInput } from "../inputs/EventSongWhereInput";

@TypeGraphQL.InputType("EventSongListRelationFilter", {
  isAbstract: true
})
export class EventSongListRelationFilter {
  @TypeGraphQL.Field(_type => EventSongWhereInput, {
    nullable: true
  })
  every?: EventSongWhereInput | undefined;

  @TypeGraphQL.Field(_type => EventSongWhereInput, {
    nullable: true
  })
  some?: EventSongWhereInput | undefined;

  @TypeGraphQL.Field(_type => EventSongWhereInput, {
    nullable: true
  })
  none?: EventSongWhereInput | undefined;
}
