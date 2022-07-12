import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EventSongCreateWithoutSongInput } from "../inputs/EventSongCreateWithoutSongInput";
import { EventSongUpdateWithoutSongInput } from "../inputs/EventSongUpdateWithoutSongInput";
import { EventSongWhereUniqueInput } from "../inputs/EventSongWhereUniqueInput";

@TypeGraphQL.InputType("EventSongUpsertWithWhereUniqueWithoutSongInput", {
  isAbstract: true
})
export class EventSongUpsertWithWhereUniqueWithoutSongInput {
  @TypeGraphQL.Field(_type => EventSongWhereUniqueInput, {
    nullable: false
  })
  where!: EventSongWhereUniqueInput;

  @TypeGraphQL.Field(_type => EventSongUpdateWithoutSongInput, {
    nullable: false
  })
  update!: EventSongUpdateWithoutSongInput;

  @TypeGraphQL.Field(_type => EventSongCreateWithoutSongInput, {
    nullable: false
  })
  create!: EventSongCreateWithoutSongInput;
}
