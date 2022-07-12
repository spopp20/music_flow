import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventSongUpdateWithoutSongInput } from "../inputs/EventSongUpdateWithoutSongInput";
import { EventSongWhereUniqueInput } from "../inputs/EventSongWhereUniqueInput";

@TypeGraphQL.InputType("EventSongUpdateWithWhereUniqueWithoutSongInput", {
  isAbstract: true
})
export class EventSongUpdateWithWhereUniqueWithoutSongInput {
  @TypeGraphQL.Field(_type => EventSongWhereUniqueInput, {
    nullable: false
  })
  where!: EventSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventSongUpdateWithoutSongInput, {
    nullable: false
  })
  data!: EventSongUpdateWithoutSongInput;
}
