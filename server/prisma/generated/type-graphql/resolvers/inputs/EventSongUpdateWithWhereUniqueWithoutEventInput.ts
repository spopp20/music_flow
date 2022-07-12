import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventSongUpdateWithoutEventInput } from "../inputs/EventSongUpdateWithoutEventInput";
import { EventSongWhereUniqueInput } from "../inputs/EventSongWhereUniqueInput";

@TypeGraphQL.InputType("EventSongUpdateWithWhereUniqueWithoutEventInput", {
  isAbstract: true
})
export class EventSongUpdateWithWhereUniqueWithoutEventInput {
  @TypeGraphQL.Field(_type => EventSongWhereUniqueInput, {
    nullable: false
  })
  where!: EventSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventSongUpdateWithoutEventInput, {
    nullable: false
  })
  data!: EventSongUpdateWithoutEventInput;
}
