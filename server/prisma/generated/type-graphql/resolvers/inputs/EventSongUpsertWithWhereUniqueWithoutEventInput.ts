import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventSongCreateWithoutEventInput } from "../inputs/EventSongCreateWithoutEventInput";
import { EventSongUpdateWithoutEventInput } from "../inputs/EventSongUpdateWithoutEventInput";
import { EventSongWhereUniqueInput } from "../inputs/EventSongWhereUniqueInput";

@TypeGraphQL.InputType("EventSongUpsertWithWhereUniqueWithoutEventInput", {
  isAbstract: true
})
export class EventSongUpsertWithWhereUniqueWithoutEventInput {
  @TypeGraphQL.Field(_type => EventSongWhereUniqueInput, {
    nullable: false
  })
  where!: EventSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventSongUpdateWithoutEventInput, {
    nullable: false
  })
  update!: EventSongUpdateWithoutEventInput;

  @TypeGraphQL.Field(_type => EventSongCreateWithoutEventInput, {
    nullable: false
  })
  create!: EventSongCreateWithoutEventInput;
}
