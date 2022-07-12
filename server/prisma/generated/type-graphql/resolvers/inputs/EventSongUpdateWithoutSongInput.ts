import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EventUpdateOneWithoutSongsNestedInput } from "../inputs/EventUpdateOneWithoutSongsNestedInput";

@TypeGraphQL.InputType("EventSongUpdateWithoutSongInput", {
  isAbstract: true
})
export class EventSongUpdateWithoutSongInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EventUpdateOneWithoutSongsNestedInput, {
    nullable: true
  })
  event?: EventUpdateOneWithoutSongsNestedInput | undefined;
}
