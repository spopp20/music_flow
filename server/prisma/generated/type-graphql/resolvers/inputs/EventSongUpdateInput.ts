import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EventUpdateOneWithoutSongsNestedInput } from "../inputs/EventUpdateOneWithoutSongsNestedInput";
import { SongUpdateOneWithoutEventsNestedInput } from "../inputs/SongUpdateOneWithoutEventsNestedInput";

@TypeGraphQL.InputType("EventSongUpdateInput", {
  isAbstract: true
})
export class EventSongUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EventUpdateOneWithoutSongsNestedInput, {
    nullable: true
  })
  event?: EventUpdateOneWithoutSongsNestedInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateOneWithoutEventsNestedInput, {
    nullable: true
  })
  song?: SongUpdateOneWithoutEventsNestedInput | undefined;
}
