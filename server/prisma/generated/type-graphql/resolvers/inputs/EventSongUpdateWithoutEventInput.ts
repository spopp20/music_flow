import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { SongUpdateOneWithoutEventsNestedInput } from "../inputs/SongUpdateOneWithoutEventsNestedInput";

@TypeGraphQL.InputType("EventSongUpdateWithoutEventInput", {
  isAbstract: true
})
export class EventSongUpdateWithoutEventInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => SongUpdateOneWithoutEventsNestedInput, {
    nullable: true
  })
  song?: SongUpdateOneWithoutEventsNestedInput | undefined;
}
